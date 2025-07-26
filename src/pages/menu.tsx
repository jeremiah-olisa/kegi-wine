import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { menuItems, categories } from "@/lib/hooks/use-food-data";
import { Heart, Star } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function MenuPage() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const filteredItems = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems;

  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <MainLayout
      title={selectedCategoryData ? selectedCategoryData.name : "Menu"}
      subtitle={
        selectedCategoryData
          ? selectedCategoryData.description
          : "Browse our delicious menu items"
      }
    >
      <div className="px-4 mt-6 space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 p-4 rounded-lg bg-card shadow-sm"
          >
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
                      <span className="text-xs text-muted-foreground">
                        ({item.reviews})
                      </span>
                    </div>
                    {item.dietary.length > 0 && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        {item.dietary[0]}
                      </span>
                    )}
                  </div>
                </div>
                <button className="p-1">
                  <Heart
                    className={`h-5 w-5 ${
                      item.isFavorite
                        ? "fill-red-500 text-red-500"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="font-semibold text-lg">
                  ${item.price.toFixed(2)}
                </span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
