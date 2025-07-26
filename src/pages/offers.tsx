import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { getActiveOffers } from "@/lib/hooks/use-food-data";

export default function OffersPage() {
  const activeOffers = getActiveOffers();

  return (
    <MainLayout title="Offers" subtitle="Special deals and promotions">
      <div className="px-4 mt-6 space-y-4">
        {activeOffers.map((offer) => (
          <div key={offer.id} className="rounded-lg bg-primary/10 p-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">{offer.image}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                <p className="text-muted-foreground mb-3">
                  {offer.description}
                </p>
                {offer.discount > 0 && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {offer.discount}% OFF
                    </span>
                  </div>
                )}
                <Button>Claim Offer</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
