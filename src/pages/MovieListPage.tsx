import { useState, useMemo } from "react";
import { movies } from "@/data/movies";
import { MovieCard } from "@/components/MovieCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterBar } from "@/components/FilterBar";
import { Film } from "lucide-react";

type SortOption = "rating" | "year" | "title";

export function MovieListPage() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("rating");

  const filtered = useMemo(() => {
    let result = movies.filter((m) => {
      const matchSearch =
        search === "" ||
        m.title.toLowerCase().includes(search.toLowerCase()) ||
        m.titleEn.toLowerCase().includes(search.toLowerCase());
      const matchGenre = selectedGenre === "" || m.genre.includes(selectedGenre);
      const matchYear = selectedYear === "" || String(m.year) === selectedYear;
      return matchSearch && matchGenre && matchYear;
    });

    result.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "year":
          return b.year - a.year;
        case "title":
          return a.title.localeCompare(b.title, "zh-CN");
        default:
          return 0;
      }
    });

    return result;
  }, [search, selectedGenre, selectedYear, sortBy]);

  return (
    <div className="min-h-screen">
      {/* 页面标题 */}
      <section className="border-b border-border/30 bg-cinema-deep/50 py-10">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="section-title">电影列表</h1>
          <div className="gold-divider mt-2" />
          <p className="mt-3 text-sm text-muted-foreground">
            浏览全部 {movies.length} 部精选电影，使用筛选和搜索找到你感兴趣的作品
          </p>
        </div>
      </section>

      {/* 筛选栏 */}
      <section className="sticky top-16 z-40 border-b border-border/30 bg-background/95 backdrop-blur-xl py-4">
        <div className="container mx-auto px-4 md:px-6 space-y-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex-1 max-w-md">
              <SearchBar value={search} onChange={setSearch} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">排序</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="h-8 rounded-md border border-border/50 bg-cinema-surface px-3 text-xs text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
              >
                <option value="rating">评分最高</option>
                <option value="year">年份最新</option>
                <option value="title">名称排序</option>
              </select>
            </div>
          </div>
          <FilterBar
            selectedGenre={selectedGenre}
            selectedYear={selectedYear}
            onGenreChange={setSelectedGenre}
            onYearChange={setSelectedYear}
          />
        </div>
      </section>

      {/* 电影网格 */}
      <section className="container mx-auto px-4 py-8 md:px-6">
        {filtered.length > 0 ? (
          <>
            <p className="mb-4 text-xs text-muted-foreground">
              共找到 {filtered.length} 部电影
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 lg:gap-6">
              {filtered.map((movie, i) => (
                <MovieCard key={movie.id} movie={movie} index={i} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Film className="h-16 w-16 text-muted-foreground/30" />
            <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
              没有找到相关电影
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              尝试更换关键词或调整筛选条件
            </p>
            <button
              onClick={() => {
                setSearch("");
                setSelectedGenre("");
                setSelectedYear("");
              }}
              className="mt-4 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
            >
              清除所有筛选
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
