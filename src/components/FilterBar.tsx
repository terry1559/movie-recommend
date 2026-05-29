import { allGenres, allYears } from "@/data/movies";

interface FilterBarProps {
  selectedGenre: string;
  selectedYear: string;
  onGenreChange: (genre: string) => void;
  onYearChange: (year: string) => void;
}

export function FilterBar({ selectedGenre, selectedYear, onGenreChange, onYearChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {/* 类型筛选 */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground">类型</span>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => onGenreChange("")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
              selectedGenre === ""
                ? "bg-primary text-primary-foreground shadow-gold"
                : "bg-cinema-hover text-muted-foreground hover:text-foreground hover:bg-cinema-hover/80"
            }`}
          >
            全部
          </button>
          {allGenres.map((genre) => (
            <button
              key={genre}
              onClick={() => onGenreChange(genre)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
                selectedGenre === genre
                  ? "bg-primary text-primary-foreground shadow-gold"
                  : "bg-cinema-hover text-muted-foreground hover:text-foreground hover:bg-cinema-hover/80"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* 年份筛选 */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-muted-foreground">年份</span>
        <select
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="h-7 rounded-md border border-border/50 bg-cinema-surface px-2 text-xs text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        >
          <option value="">全部</option>
          {allYears.map((year) => (
            <option key={year} value={String(year)}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
