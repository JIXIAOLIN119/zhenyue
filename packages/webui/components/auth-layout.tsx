import { ZhenYueLogo } from '@/ui/components/ui/icons'
import { CheckCircle2 } from 'lucide-react'
import { ReactNode } from 'react'
import { m } from '@/ui/paraglide/messages.js'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-background font-sans overflow-hidden relative">
      {/* Drifting Background Mesh Blobs */}
      <div className="bg-chart-1/10 dark:bg-chart-1/5 w-[600px] h-[600px] rounded-full blur-[140px] absolute top-[-10%] left-[-10%] animate-drift-slow" />
      <div className="bg-chart-3/10 dark:bg-chart-3/5 w-[600px] h-[600px] rounded-full blur-[140px] absolute bottom-[-10%] right-[-10%] animate-drift-medium" />

      {/* Main Glassmorphic Split-Pane Card */}
      <div className="relative max-w-4xl w-full flex flex-col md:flex-row rounded-3xl border border-border shadow-2xl bg-card overflow-hidden min-h-[580px] z-10 transition-all duration-300 hover:shadow-primary/5">
        {/* Left Pane (Brand Showcase) */}
        <div className="hidden md:flex flex-col w-full md:w-1/2 bg-gradient-to-br from-chart-1/15 via-chart-2/10 to-chart-3/5 dark:from-chart-1/20 dark:via-chart-2/10 dark:to-chart-3/10 p-8 md:p-12 justify-between border-r border-border relative overflow-hidden">
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Logo & Brand */}
          <div className="relative flex items-center gap-3">
            <ZhenYueLogo className="h-12 w-12 shadow-lg shadow-primary/10 rounded-2xl transition-transform duration-500 hover:scale-105" />
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 bg-clip-text text-transparent">
              帧阅
            </span>
          </div>

          {/* Marketing Copy / Feature Points */}
          <div className="relative my-8 md:my-0 space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-foreground">
              {m.auth_tagline()}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {m.auth_description()}
            </p>

            <ul className="space-y-3.5 pt-4">
              {[m.auth_feature_uploads(), m.auth_feature_metadata(), m.auth_feature_teams()].map(
                (text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-foreground/80 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{text}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Footer Label */}
          <div className="relative pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground font-medium">{m.auth_community_cta()}</p>
          </div>
        </div>

        {/* Right Pane (Form Container) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">{children}</div>
      </div>
    </div>
  )
}
