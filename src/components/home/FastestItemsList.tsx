import { Button } from "@/components/ui/button";
import { getFastestItems } from "@/lib/hooks/use-food-data";
import { Heart } from "lucide-react";

export function FastestItemsList() {
  const fastestItems = getFastestItems();

  return (
    <div className="px-4 mt-4 animate-stagger">
      <div className="flex gap-4 overflow-x-auto pb-4">
        {fastestItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 rounded-lg bg-card shadow-md overflow-hidden hover-lift"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 left-2 flex items-center gap-1">
                <span className="bg-primary text-primary-foreground rounded px-2 py-0.5 text-xs font-semibold">
                  {item.rating}
                </span>
                <span className="text-xs text-white bg-black/50 rounded px-1">
                  ⭐
                </span>
              </div>
              <button className="absolute top-2 right-2 hover-scale">
                <Heart className={`h-4 w-4 ${item.isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-sm mb-1 truncate">{item.name}</h3>
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">${item.price.toFixed(2)}</span>
                <Button size="sm" className="text-xs px-2 py-1 hover-scale">
                  Order
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 