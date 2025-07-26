import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { getFavoriteItems } from "@/lib/hooks/use-food-data";
import { Heart, Star } from "lucide-react";

export default function FavoritesPage() {
  const favoriteItems = getFavoriteItems();

  return (
    <MainLayout
      title="Favorites"
      subtitle="Your saved items and preferences"
    >
      <div className="px-4 mt-6 space-y-4">
        {favoriteItems.length === 0 ? (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No favorites yet</h3>
            <p className="text-muted-foreground">Start adding items to your favorites!</p>
          </div>
        ) : (
          favoriteItems.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 rounded-lg bg-card shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{item.rating}</span>
                        <span className="text-xs text-muted-foreground">({item.reviews})</span>
                      </div>
                      {item.dietary.length > 0 && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          {item.dietary[0]}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="p-1">
                    <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-semibold text-lg">${item.price.toFixed(2)}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </MainLayout>
  );
} 