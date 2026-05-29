import { Link, useLocation } from "react-router-dom";
import { Film, Home, List, Users } from "lucide-react";

const navItems = [
  { path: "/", label: "首页", icon: Home },
  { path: "/movies", label: "电影列表", icon: List },
  { path: "/about", label: "关于我们", icon: Users },
];

export function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <Film className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-serif text-xl font-bold text-gradient-gold">
            光影推荐
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-cinema-hover hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
