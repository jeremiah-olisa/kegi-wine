import { ShoppingCart, Wallet } from "lucide-react";
import { ThemeToggle } from "@/components/app/ThemeToggle";
import { Logo } from "@/components/app/Logo";
import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <header className="flex items-center justify-between px-4 pt-4 pb-2 animate-fade-in">
      <Link to="/" className="flex items-center gap-2 hover-scale transition-opacity">
        <Logo className="h-8 w-8 text-primary" />
        <span className="font-semibold text-lg tracking-tight">
          KeGi Wines and Lounge
        </span>
      </Link>
      <div className="flex items-center gap-3">
        <Link to="/wallet" aria-label="Wallet" className="p-1 hover-scale transition-opacity">
          <Wallet className="h-5 w-5" />
        </Link>
        <Link to="/cart" aria-label="Cart" className="relative hover-scale transition-opacity">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-primary text-xs text-primary-foreground rounded-full px-1.5 animate-bounce-in">
            2
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
