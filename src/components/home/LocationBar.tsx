import { MapPin } from "lucide-react";

export function LocationBar() {
  return (
    <div className="flex items-center gap-2 px-4 text-sm text-muted-foreground">
      <MapPin className="h-4 w-4" />
      <span>Sterling place, Brooklyn</span>
    </div>
  );
} 