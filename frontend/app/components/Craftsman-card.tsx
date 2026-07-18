import { Button } from "@base-ui/react";
import { Star, MapPin, Briefcase, Clock } from "lucide-react";

export function CraftsmanCard(props: any) {
  // 1. Safety check: Fallback to props if 'craftsman' object isn't passed
  const data = props.craftsman || props || {};

  // 2. Extract variables with strict fallback values
  const name = data.name || "Placeholder Name";
  const title = data.title || "Specialist";
  const location = data.location || "Unknown Location";
  const rating = data.rating || 5.0;
  const experience = data.experience || 0;
  const rate = data.rate || 0;
  const reviews = data.reviews || 0;
  const bio = data.bio || "No bio available.";

  // 3. FORCE services to be an array so .map() can NEVER fail
  const services = Array.isArray(data.services) ? data.services : [];

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      {/* Image & Rating */}
      <div className="relative w-full h-48 bg-muted overflow-hidden flex items-center justify-center text-xs text-muted-foreground">
        <span>Image Placeholder</span>
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
          <p className="text-sm text-primary font-medium">{title}</p>
        </div>

        {/* Services Tags */}
        <div className="mb-3 flex flex-wrap gap-1"></div>

        {/* Details List */}
        <div className="space-y-2 mb-4 flex-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{experience} years experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" />
            <span>${rate}/hr</span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mb-4">{reviews} reviews</p>
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2">{bio}</p>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Button className="flex-1" size="sm">
            Contact
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
