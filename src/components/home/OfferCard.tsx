import { Button } from "@/components/ui/button";
import { getActiveOffers } from "@/lib/hooks/use-food-data";

export function OfferCard() {
  const activeOffers = getActiveOffers();
  const currentOffer = activeOffers[0]; // Display the first active offer

  if (!currentOffer) return null;

  return (
    <section className="mx-4 mt-6 rounded-lg bg-primary/10 p-4 flex items-center justify-between">
      <div>
        <h2 className="font-semibold text-base mb-1">{currentOffer.title}</h2>
        <p className="text-sm text-muted-foreground mb-2">
          {currentOffer.description}
        </p>
        <Button size="sm">Order Now</Button>
      </div>
      <div className="hidden sm:block">
        <span role="img" aria-label="offer mascot" className="text-5xl">
          {currentOffer.image}
        </span>
      </div>
    </section>
  );
} 