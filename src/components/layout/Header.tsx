
import { Link } from "react-router-dom";
import { Menu, BookOpen } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-accent" />
            <span className="text-xl font-semibold">ReadJoy</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/ebooks" className="text-foreground hover:text-accent transition-colors">
              eBooks
            </Link>
          </nav>

          <button className="p-2 text-muted-foreground hover:text-foreground md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
