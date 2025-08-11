import { Star, ShoppingCart, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  ageRange: string;
  difficulty: string;
  lessons: number;
  instructor: string;
}

export default function CourseCard({
  title,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  ageRange,
  difficulty,
  lessons,
  instructor,
}: CourseCardProps) {
  return (
    <div className="relative rounded-xl border bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Rating pill top-left */}
      <div className="absolute top-2 left-2 flex items-center gap-1 bg-white/90 px-2 py-1 rounded-md text-sm font-medium shadow">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        {rating}
      </div>

      {/* Course image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Tags */}
        <div className="flex items-center gap-2 text-xs">
          <Badge variant="secondary">{difficulty}</Badge>
          <Badge variant="outline">{lessons} classes</Badge>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-card-foreground line-clamp-2 hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users className="w-4 h-4" />
          <span>By {instructor}</span>
        </div>

        {/* Age Range */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{ageRange} yrs</span>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            variant="outline"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
