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
      <main className="min-h-screen bg-background text-foreground font-base pb-20 animate-fade-in">
        <AppHeader />
        {title && (
          <div className="px-4 pt-4 animate-slide-in-left">
            <h1 className="text-2xl font-semibold">{title}</h1>
            {subtitle && (
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            )}
          </div>
        )}
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      <BottomNav />
    </>
  );
} 