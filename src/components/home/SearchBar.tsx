import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";

export function SearchBar() {
  return (
    <form className="flex items-center gap-2 px-4 mt-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full rounded-md border border-border bg-input pl-10 pr-4 py-2 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <Button
        type="button"
        variant="secondary"
        className="flex items-center gap-1 px-3"
      >
        <Filter className="h-4 w-4" />
        <span className="sr-only">Filter</span>
      </Button>
    </form>
  );
} 