import { categories } from "@/lib/hooks/use-food-data";
import { Link, useLocation } from "react-router-dom";

export function CategoryChips() {
  const location = useLocation();

  return (
    <nav className="flex gap-2 overflow-x-auto px-4 mt-4 pb-2 animate-stagger">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/menu?category=${category.id}`}
          className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground hover:bg-primary/20 transition-all duration-200 hover-scale whitespace-nowrap"
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </Link>
      ))}
    </nav>
  );
}
