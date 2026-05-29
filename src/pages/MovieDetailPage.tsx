import { useParams, Link, Navigate } from "react-router-dom";
import { Star, Calendar, User, Users, Film, Award, ArrowLeft } from "lucide-react";
import { movies } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { generatePosterGradient } from "@/lib/poster-gradients";

export function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <Navigate to="/movies" replace />;
  }

  const hasImage = !movie.posterUrl.includes("parasite") &&
    !movie.posterUrl.includes("coco") &&
    !movie.posterUrl.includes("wandering-earth") &&
    !movie.posterUrl.includes("dune") &&
    !movie.posterUrl.includes("zootopia");

  const related = movies
    .filter((m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g)))
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* 面包屑导航 */}
      <section className="border-b border-border/30 bg-cinema-deep/50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">首页</Link>
            <span>/</span>
            <Link to="/movies" className="hover:text-primary transition-colors">电影列表</Link>
            <span>/</span>
            <span className="text-foreground">{movie.title}</span>
          </div>
        </div>
      </section>

      {/* 电影详情主体 */}
      <section className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr]">
          {/* 左侧海报 */}
          <div className="animate-fade-in">
            <div className="overflow-hidden rounded-lg shadow-card">
              {hasImage ? (
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="poster-hover w-full aspect-[3/4] object-cover"
                />
              ) : (
                <div
                  className="poster-hover flex aspect-[3/4] w-full items-center justify-center"
                  style={{ background: generatePosterGradient(movie.title) }}
                >
                  <span className="font-serif text-3xl font-bold text-white/80 px-6 text-center">
                    {movie.title}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 右侧信息 */}
          <div className="animate-slide-up space-y-6">
            {/* 标题与评分 */}
            <div>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                    {movie.title}
                  </h1>
                  {movie.titleEn && (
                    <p className="mt-1 text-sm text-muted-foreground">{movie.titleEn}</p>
                  )}
                </div>
                <div className="flex items-center gap-1.5 rounded-xl bg-primary/10 px-4 py-2 shrink-0">
                  <Star className="h-5 w-5 fill-primary text-primary" />
                  <span className="text-xl font-bold text-primary">{movie.rating}</span>
                </div>
              </div>
            </div>

            {/* 详细信息 */}
            <div className="grid gap-3 sm:grid-cols-2">
              <InfoItem icon={User} label="导演" value={movie.director} />
              <InfoItem icon={Users} label="主演" value={movie.cast} />
              <InfoItem icon={Calendar} label="上映年份" value={String(movie.year)} />
              <InfoItem icon={Film} label="类型" value={movie.genre.join(" / ")} />
            </div>

            {/* 分隔线 */}
            <div className="gold-divider" />

            {/* 剧情简介 */}
            <div>
              <h2 className="mb-3 flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                <Film className="h-5 w-5 text-primary" />
                剧情简介
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {movie.summary}
              </p>
            </div>

            {/* 推荐理由 */}
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-5">
              <h2 className="mb-3 flex items-center gap-2 font-serif text-lg font-bold text-foreground">
                <Award className="h-5 w-5 text-primary" />
                推荐理由
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80">
                {movie.recommendReason}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 相关推荐 */}
      {related.length > 0 && (
        <section className="container mx-auto px-4 pb-12 md:px-6">
          <div className="mb-6">
            <h2 className="section-title">你可能也喜欢</h2>
            <div className="gold-divider mt-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            {related.map((m, i) => (
              <MovieCard key={m.id} movie={m} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* 返回按钮 */}
      <div className="container mx-auto px-4 pb-8 md:px-6">
        <Link
          to="/movies"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          返回电影列表
        </Link>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="h-4 w-4 mt-0.5 text-primary shrink-0" />
      <div>
        <span className="text-xs text-muted-foreground">{label}</span>
        <p className="text-sm font-medium text-foreground">{value}</p>
      </div>
    </div>
  );
}
