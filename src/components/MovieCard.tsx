import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Movie } from "@/data/types";
import { generatePosterGradient } from "@/lib/poster-gradients";

interface MovieCardProps {
  movie: Movie;
  index?: number;
}

export function MovieCard({ movie, index = 0 }: MovieCardProps) {
  const hasImage = !movie.posterUrl.includes("parasite") &&
    !movie.posterUrl.includes("coco") &&
    !movie.posterUrl.includes("wandering-earth") &&
    !movie.posterUrl.includes("dune") &&
    !movie.posterUrl.includes("zootopia");

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="card-cinema overflow-hidden">
        <div className="relative aspect-[3/4] overflow-hidden">
          {hasImage ? (
            <img
              src={movie.posterUrl}
              alt={movie.title}
              className="h-full w-full object-cover poster-hover"
              loading="lazy"
            />
          ) : (
            <div
              className="poster-hover flex h-full w-full items-center justify-center"
              style={{ background: generatePosterGradient(movie.title) }}
            >
              <span className="font-serif text-2xl font-bold text-white/80 px-4 text-center">
                {movie.title}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* 评分徽章 */}
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-sm font-bold text-primary">{movie.rating}</span>
          </div>

          {/* 悬停提示 */}
          <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1.5 text-xs font-medium text-primary-foreground">
              查看详情 →
            </span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-serif text-base font-bold text-foreground truncate group-hover:text-primary transition-colors duration-200">
            {movie.title}
          </h3>
          <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{movie.year}</span>
            <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
            <span>{movie.genre.join(" / ")}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
