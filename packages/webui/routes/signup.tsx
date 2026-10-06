import { client } from '@/ui/api/client'
import { AuthLayout } from '@/ui/components/auth-layout'
import { Button } from '@/ui/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/ui/components/ui/card'
import { ZhenYueLogo } from '@/ui/components/ui/icons'
import { Input } from '@/ui/components/ui/input'
import { Label } from '@/ui/components/ui/label'
import { signUp } from '@/ui/lib/auth-client'
import { m } from '@/ui/paraglide/messages.js'
import { getLocale, setLocale } from '@/ui/paraglide/runtime.js'
import { useAuthStore } from '@/ui/stores/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { ArrowRight, Loader2, Lock, Mail, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signupSchema = z.object({
  email: z.string().email(m.invalid_email_address()),
  password: z.string().min(3, m.password_min_length()),
  inviteCode: z.string().optional(),
})

type SignupSchema = z.infer<typeof signupSchema>

function SignupPage() {
  const navigate = useNavigate()
  const search = Route.useSearch()
  const inviteCode = (search as { inviteCode?: string }).inviteCode
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [locale, setLocaleState] = useState<'en' | 'zh'>(() => getLocale())

  const handleLocaleChange = (newLocale: 'en' | 'zh') => {
    setLocaleState(newLocale)
    setLocale(newLocale)
  }

  const { data: inviteInfo } = useQuery({
    queryKey: ['invite', inviteCode],
    queryFn: async () => {
      const res = await client.api.invite[':code'].$get({
        param: { code: inviteCode! },
      })
      if (!res.ok) {
        throw new Error('Failed to fetch invite info')
      }
      return await res.json()
    },
    enabled: !!inviteCode,
  })

  const { data: signupInfo, isLoading: isSignupInfoLoading } = useQuery({
    queryKey: ['/signup-info'],
    queryFn: async () => {
      const res = await client.api['signup-info'].$get()
      if (!res.ok) throw new Error('Failed to fetch signup info')
      return await res.json()
    },
  })

  const setUser = useAuthStore((state) => state.setUser)

  const form = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      inviteCode: inviteCode,
    },
  })

  const onSubmit = async (data: SignupSchema) => {
    setLoading(true)
    setError(null)
    const { data: session, error: signUpError } = await signUp.email({
      email: data.email,
      password: data.password,
      name: data.email, // Use email as the username
      inviteCode: data.inviteCode,
      locale,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)

    setLoading(false)
    if (signUpError) {
      setError(signUpError.message || m.signup_failed())
      return
    }

    if (session) {
      setUser(session.user)
      navigate({ to: '/' })
    }
  }

  if (isSignupInfoLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="relative flex flex-col items-center">
          <ZhenYueLogo className="h-16 w-16 animate-pulse mb-4 text-primary shadow-xl rounded-2xl" />
          <Loader2 className="h-6 w-6 animate-spin text-primary/70" />
        </div>
      </div>
    )
  }

  const isFirstUser = signupInfo?.initialized === false
  const isPublicSignupDisabled = !isFirstUser && !inviteCode

  if (isPublicSignupDisabled) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-background font-sans overflow-hidden relative">
        {/* Background Mesh Blobs */}
        <div className="bg-chart-1/10 dark:bg-chart-1/5 w-[500px] h-[500px] rounded-full blur-[120px] absolute top-[-10%] left-[-10%] animate-drift-slow" />
        <div className="bg-chart-3/10 dark:bg-chart-3/5 w-[500px] h-[500px] rounded-full blur-[120px] absolute bottom-[-10%] right-[-10%] animate-drift-medium" />

        <Card className="w-full max-w-md relative z-10 border border-border shadow-2xl bg-card rounded-3xl overflow-hidden">
          <CardHeader className="text-center pt-8 pb-4">
            <div className="flex justify-center mb-4">
              <ZhenYueLogo className="h-16 w-16 shadow-lg shadow-primary/10 rounded-2xl" />
            </div>
            <CardTitle className="text-2xl font-bold tracking-tight bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
              {m.registration_disabled()}
            </CardTitle>
            <CardDescription className="mt-2 text-muted-foreground">
              {m.registration_disabled_description()}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col gap-4 pb-8 text-center text-sm border-t border-border/50 pt-6">
            <p className="text-muted-foreground">
              {m.already_have_account()}{' '}
              <a
                href="/login"
                className="font-semibold text-primary hover:text-primary/80 transition-colors hover:underline inline-flex items-center gap-1"
              >
                {m.login_here()} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <AuthLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{m.create_account()}</h1>
        <p className="text-muted-foreground text-sm mt-1 mb-4">{m.signup_subtitle()}</p>

        {/* Context Banners (First User / Invite Info) */}
        {isFirstUser && (
          <div className="flex items-start gap-3 p-3 bg-primary/10 border border-primary/20 text-primary rounded-2xl text-xs leading-relaxed font-medium">
            <span>🎉</span>
            <span>{m.first_user_notice()}</span>
          </div>
        )}
        {inviteInfo && !('error' in inviteInfo) && (
          <div className="flex items-start gap-3 p-3 bg-primary/10 border border-primary/20 text-primary rounded-2xl text-xs leading-relaxed font-medium mt-3">
            <span>👋</span>
            <span>
              {m.invite_join_message({
                inviterName: inviteInfo.inviterName,
                targetName: inviteInfo.projectName || inviteInfo.teamName,
                role: inviteInfo.role,
              })}
            </span>
          </div>
        )}
      </div>

      {error && (
        <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-sm text-center font-medium">
          {error}
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-xs font-semibold text-muted-foreground tracking-wide uppercase"
          >
            {m.email_address()}
          </Label>
          <div className="relative group">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              id="email"
              {...form.register('email')}
              placeholder="you@example.com"
              type="email"
              className="pl-10.5 h-11 rounded-xl transition-all shadow-sm"
            />
          </div>
          {form.formState.errors.email && (
            <p className="text-red-500 text-xs font-medium">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-xs font-semibold text-muted-foreground tracking-wide uppercase"
          >
            {m.password()}
          </Label>
          <div className="relative group">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              id="password"
              type="password"
              {...form.register('password')}
              placeholder={m.password_min_placeholder()}
              className="pl-10.5 h-11 rounded-xl transition-all shadow-sm"
            />
          </div>
          {form.formState.errors.password && (
            <p className="text-red-500 text-xs font-medium">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full h-11 bg-gradient-to-r from-chart-1 to-chart-2 hover:from-chart-2 hover:to-chart-3 text-white font-semibold rounded-xl shadow-md shadow-primary/10 hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-0"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              {m.creating_account()}
            </>
          ) : (
            <>
              <UserPlus className="w-4 h-4" />
              {m.sign_up()}
            </>
          )}
        </Button>
      </form>

      <div className="mt-12 pt-10 border-t border-border/50 text-center text-sm flex flex justify-between gap-4">
        <div>
          <span className="text-muted-foreground">{m.already_have_account()} </span>
          <a
            href="/login"
            className="font-semibold text-primary hover:text-primary/80 transition-colors hover:underline inline-flex items-center gap-0.5"
          >
            {m.login()} <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <button
            type="button"
            onClick={() => handleLocaleChange('en')}
            className={`cursor-pointer hover:text-foreground transition-colors ${
              locale === 'en' ? 'font-bold text-primary' : ''
            }`}
          >
            English
          </button>
          <span className="text-muted-foreground/60">/</span>
          <button
            type="button"
            onClick={() => handleLocaleChange('zh')}
            className={`cursor-pointer hover:text-foreground transition-colors ${
              locale === 'zh' ? 'font-bold text-primary' : ''
            }`}
          >
            中文
          </button>
        </div>
      </div>
    </AuthLayout>
  )
}

export const Route = createFileRoute('/signup')({
  component: SignupPage,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      inviteCode: (search.inviteCode as string) || undefined,
    }
  },
  beforeLoad: () => {
    if (useAuthStore.getState().user) {
      throw redirect({
        to: '/',
      })
    }
  },
})
