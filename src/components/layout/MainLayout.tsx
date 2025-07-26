import { AppHeader } from "@/components/app/AppHeader";
import { BottomNav } from "@/components/app/BottomNav";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function MainLayout({ children, title, subtitle }: MainLayoutProps) {
  return (
    <>
      <main className="min-h-screen bg-background text-foreground font-base pb-20">
        <div className="bg-black dark:bg-background">
          <AppHeader />
          {title && (
            <div className="px-4 pt-4">
              <h1 className="text-2xl font-semibold text-white dark:text-foreground">{title}</h1>
              {subtitle && (
                <p className="text-muted-foreground mt-2 text-white/70 dark:text-muted-foreground">{subtitle}</p>
              )}
            </div>
          )}
        </div>
        {children}
      </main>
      <BottomNav />
    </>
  );
} 