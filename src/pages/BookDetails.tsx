
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { BookOpen, Star, Share2, Download } from "lucide-react";
import { Book } from "../types/book";
import { Button } from "../components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const fetchBookDetails = async () => {
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      if (data) {
        setBook({
          id: data.id,
          title: data.title,
          author: data.author,
          pages: data.pages || 0,
          type: data.type || 'Document',
          category: data.category || 'General',
          progress: 0,
          isBookmarked: false
        });
      }
    } catch (error) {
      console.error('Error fetching book details:', error);
      toast({
        title: "Error",
        description: "Could not load book details.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBuyNow = () => {
    navigate(`/checkout/${id}`);
  };

  const handlePreview = () => {
    toast({
      title: "Preview Started",
      description: "You can preview the first 10 pages of this book.",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container max-w-6xl mx-auto px-4 py-8 flex-grow">
          <div className="text-center py-12">Loading book details...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container max-w-6xl mx-auto px-4 py-8 flex-grow">
          <div className="text-center py-12">Book not found</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-8 flex-grow">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Book Cover */}
          <div className="aspect-[3/4] bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-secondary">
              <BookOpen className="w-24 h-24 text-muted-foreground" />
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
              <p className="text-lg text-muted-foreground">{book.author}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="ml-1">Not rated yet</span>
              </div>
              <div className="text-muted-foreground">|</div>
              <div className="text-muted-foreground">{book.pages} pages</div>
            </div>

            <div className="prose max-w-none">
              <p>
                Book description will be added soon.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button onClick={handleBuyNow} size="lg" className="w-full">
                Buy Now - UGX 5,000
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={handlePreview}
              >
                Preview Book
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Sample
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetails;
