
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, BookOpen, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      });
      navigate("/");
    }
  };

  const handleProtectedAction = (path: string) => {
    if (!session) {
      toast({
        title: "Authentication Required",
        description: "Please create an account or log in to access this feature.",
        variant: "destructive",
      });
      navigate("/auth");
    } else {
      navigate(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-accent" />
            <span className="text-xl font-semibold">EaseReads</span>
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
            {session && (
              <button 
                onClick={() => handleProtectedAction("/dashboard")} 
                className="text-foreground hover:text-accent transition-colors"
              >
                Dashboard
              </button>
            )}
            {session ? (
              <div className="flex items-center space-x-4">
                <UserCircle className="w-6 h-6" />
                <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="outline" onClick={() => navigate("/auth")}>Log In</Button>
                <Button onClick={() => navigate("/auth")}>Sign Up</Button>
              </div>
            )}
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
              {session && (
                <button 
                  onClick={() => {
                    handleProtectedAction("/dashboard");
                    setIsMobileMenuOpen(false);
                  }} 
                  className="text-foreground hover:text-accent transition-colors px-2 text-left"
                >
                  Dashboard
                </button>
              )}
              <div className="pt-4 border-t border-border space-y-2">
                {session ? (
                  <Button onClick={handleSignOut} className="w-full">Sign Out</Button>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => {
                        navigate("/auth");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Log In
                    </Button>
                    <Button 
                      className="w-full"
                      onClick={() => {
                        navigate("/auth");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
