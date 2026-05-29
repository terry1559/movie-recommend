import { Link } from "react-router-dom";
import { ArrowLeft, Film } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-cinema-deep">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Film className="h-5 w-5 text-primary" />
            <span className="font-serif text-sm font-bold text-gradient-gold">
              光影推荐
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            课程作业作品 · 仅供学习交流使用
          </p>
          <nav className="flex gap-4">
            <Link to="/" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              首页
            </Link>
            <Link to="/movies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              电影列表
            </Link>
            <Link to="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              关于我们
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export function BackLink({ to = "/movies", label = "返回列表" }: { to?: string; label?: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
