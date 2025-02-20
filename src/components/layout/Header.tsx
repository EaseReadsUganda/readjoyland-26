
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleProtectedAction = (path: string) => {
    toast({
      title: "Authentication Required",
      description: "Please create an account or log in to access this feature.",
      variant: "destructive",
    });
  };

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
            <button 
              onClick={() => handleProtectedAction("/ebooks")} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Explore
            </button>
            <button 
              onClick={() => handleProtectedAction("/dashboard")} 
              className="text-foreground hover:text-accent transition-colors"
            >
              Dashboard
            </button>
            <Button variant="outline" className="mr-2">Log In</Button>
            <Button>Sign Up</Button>
          </nav>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-foreground md:hidden"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-accent transition-colors px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button 
                onClick={() => {
                  handleProtectedAction("/ebooks");
                  setIsMobileMenuOpen(false);
                }} 
                className="text-foreground hover:text-accent transition-colors px-2 text-left"
              >
                Explore
              </button>
              <button 
                onClick={() => {
                  handleProtectedAction("/dashboard");
                  setIsMobileMenuOpen(false);
                }} 
                className="text-foreground hover:text-accent transition-colors px-2 text-left"
              >
                Dashboard
              </button>
              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="outline" className="w-full">Log In</Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
