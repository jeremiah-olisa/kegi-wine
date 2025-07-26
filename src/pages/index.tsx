import { MainLayout } from "@/components/layout/MainLayout";
import { LocationBar } from "@/components/home/LocationBar";
import { SearchBar } from "@/components/home/SearchBar";
import { OfferCard } from "@/components/home/OfferCard";
import { CategoryChips } from "@/components/home/CategoryChips";
import { FeaturedCard } from "@/components/home/FeaturedCard";
import { FastestItemsList } from "@/components/home/FastestItemsList";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <MainLayout>
      <LocationBar />
      <h1 className="px-4 mt-6 text-2xl font-semibold">
        What are you going to eat today?
      </h1>
      <SearchBar />
      <OfferCard />
      <CategoryChips />
      <section className="mt-6 px-4 flex items-center justify-between">
        <h2 className="font-semibold text-lg">Fastest Near You</h2>
        <Link to="/menu" className="text-primary text-sm font-medium">
          See All
        </Link>
      </section>
      <FastestItemsList />
      <FeaturedCard />
    </MainLayout>
  );
} 