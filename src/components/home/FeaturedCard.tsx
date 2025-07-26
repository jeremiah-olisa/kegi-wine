import { Button } from "@/components/ui/button";
import { getFastestItems } from "@/lib/hooks/use-food-data";
import { Heart } from "lucide-react";

export function FeaturedCard() {
  const fastestItems = getFastestItems();
  const featuredItem = fastestItems[0]; // Display the first fastest item

  if (!featuredItem) return null;

  return (
    <section className="mx-4 mt-6 rounded-lg bg-card shadow-md overflow-hidden hover-lift animate-scale-in">
      <div className="flex items-center">
        <img
          src={featuredItem.image}
          alt={featuredItem.name}
          className="h-24 w-24 object-cover rounded-lg m-4"
        />
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-primary text-primary-foreground rounded px-2 py-0.5 text-xs font-semibold">
              {featuredItem.rating}
            </span>
            <span className="text-xs text-muted-foreground">({featuredItem.reviews}+)</span>
            <button className="ml-auto hover-scale">
              <Heart className={`h-4 w-4 ${featuredItem.isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
            </button>
          </div>
          <h3 className="font-semibold text-lg mb-1">{featuredItem.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">
            {featuredItem.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-lg">${featuredItem.price.toFixed(2)}</span>
            <Button size="sm" className="hover-scale">Order</Button>
          </div>
        </div>
      </div>
    </section>
  );
} 