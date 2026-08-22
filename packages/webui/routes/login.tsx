import { client } from '@/ui/api/client'
import { AuthLayout } from '@/ui/components/auth-layout'
import { Button } from '@/ui/components/ui/button'
import { ZhenYueLogo } from '@/ui/components/ui/icons'
import { Input } from '@/ui/components/ui/input'
import { Label } from '@/ui/components/ui/label'
import { signIn } from '@/ui/lib/auth-client'
import { useAuthStore } from '@/ui/stores/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'
import { ArrowRight, Loader2, Lock, LogIn, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { m } from '@/ui/paraglide/messages.js'

const loginSchema = z.object({
  email: z.string().email(m.invalid_email_address()),
  password: z.string().min(1, m.password_is_required()),
})

type LoginSchema = z.infer<typeof loginSchema>

function LoginPage() {
  const navigate = useNavigate()
  const setUser = useAuthStore((state) => state.setUser)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const { data: signupInfo, isLoading: isSignupInfoLoading } = useQuery({
    queryKey: ['/signup-info'],
    queryFn: async () => {
      const res = await client.api['signup-info'].$get()
      if (!res.ok) throw new Error('Failed to fetch signup info')
      return await res.json()
    },
  })

  useEffect(() => {
    if (signupInfo && !signupInfo.initialized) {
      navigate({ to: '/signup', search: { inviteCode: '' } })
    }
  }, [signupInfo, navigate])

  const isDemoEnv = signupInfo?.demoMode === true

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginSchema) => {
    setLoading(true)
    setError(null)
    const { data: session, error: signInError } = await signIn.email({
      email: data.email,
      password: data.password,
    })

    setLoading(false)
    if (signInError) {
      setError(signInError.message || m.invalid_credentials())
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

  return (
    <AuthLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">{m.welcome_back()}</h1>
        <p className="text-muted-foreground text-sm mt-1">{m.login_subtitle()}</p>
      </div>

      {isDemoEnv && (
        <div className="mb-6 p-4 bg-primary/10 border border-primary/20 text-primary rounded-xl text-sm leading-relaxed">
          <p>
            <strong>{m.demo_access()}</strong> {m.demo_access_instructions()}
          </p>
        </div>
      )}

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
              placeholder={m.password_placeholder()}
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
              {m.logging_in()}
            </>
          ) : (
            <>
              <LogIn className="w-4 h-4" />
              {m.login()}
            </>
          )}
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm">
        <span className="text-muted-foreground">{m.no_account_prompt()}</span>
        <a
          href="/signup"
          className="font-semibold text-primary hover:text-primary/80 transition-colors hover:underline inline-flex items-center gap-0.5"
        >
          {m.sign_up()} <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </AuthLayout>
  )
}

export const Route = createFileRoute('/login')({
  component: LoginPage,
  beforeLoad: () => {
    if (useAuthStore.getState().user) {
      throw redirect({
        to: '/',
      })
    }
  },
})
