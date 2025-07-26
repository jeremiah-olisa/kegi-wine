import { ShoppingCart, Wallet } from "lucide-react";
import { ThemeToggle } from "@/components/app/ThemeToggle";
import { Logo } from "@/components/app/Logo";
import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between px-4 pt-4 pb-2">
      <div className="flex items-center gap-2">
        <Link to="/">
          <Logo className="h-8 w-8 text-primary" />
        </Link>
        <span className="font-semibold text-lg tracking-tight">
          KeGi Wines and Lounge
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Wallet" className="p-1">
          <Wallet className="h-5 w-5" />
        </button>
        <button aria-label="Cart" className="relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-primary text-xs text-primary-foreground rounded-full px-1.5">
            2
          </span>
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}
