import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { movies } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";

export function HomePage() {
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 4);
  const featured = movies[0];

  return (
    <div className="min-h-screen">
      {/* 英雄区 */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-primary/3 blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-primary">精选推荐</span>
            </div>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              发现值得一看的
              <span className="text-gradient-gold">好电影</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              每一部推荐，都经过精心挑选。从经典到新锐，从科幻到文艺，
              <br className="hidden md:block" />
              让我们帮你找到触动心灵的观影体验。
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                to="/movies"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-gold transition-all duration-200 hover:bg-primary/90 hover:shadow-lg"
              >
                浏览全部电影
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to={`/movie/${featured.id}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-cinema-surface px-6 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/30 hover:bg-cinema-hover"
              >
                今日推荐
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 今日推荐 */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="card-cinema overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={featured.posterUrl}
                alt={featured.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full bg-primary/15 px-3 py-1">
                <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                <span className="text-xs font-bold text-primary">{featured.rating}</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{featured.titleEn}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {featured.genre.map((g) => (
                  <span key={g} className="rounded-full border border-border/50 px-2.5 py-0.5 text-xs text-muted-foreground">
                    {g}
                  </span>
                ))}
                <span className="rounded-full border border-border/50 px-2.5 py-0.5 text-xs text-muted-foreground">
                  {featured.year}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {featured.recommendReason}
              </p>
              <Link
                to={`/movie/${featured.id}`}
                className="mt-6 inline-flex items-center gap-2 self-start rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-gold transition-all duration-200 hover:bg-primary/90"
              >
                查看详情
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 高分电影 */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="section-title">高分电影</h2>
            <div className="gold-divider mt-2" />
          </div>
          <Link
            to="/movies"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            查看更多 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
          {topRated.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </div>
      </section>

      {/* 全部电影预览 */}
      <section className="container mx-auto px-4 md:px-6 pb-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="section-title">全部电影</h2>
            <div className="gold-divider mt-2" />
          </div>
          <Link
            to="/movies"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            筛选浏览 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
          {movies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
