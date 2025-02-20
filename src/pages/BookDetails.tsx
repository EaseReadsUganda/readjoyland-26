import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { BookOpen, Star, Share2, Download } from "lucide-react";
import { Book } from "../types/book";
import { Button } from "../components/ui/button";
import { useToast } from "@/hooks/use-toast";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock book data - in a real app, this would come from an API
  const book: Book = {
    id: "1",
    title: "The Art of Digital Reading",
    author: "Added by ReadJoy Team",
    pages: 257,
    type: "Document",
    category: "Professional",
    progress: 73,
    isBookmarked: false,
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
                <span className="ml-1">4.5 (120 reviews)</span>
              </div>
              <div className="text-muted-foreground">|</div>
              <div className="text-muted-foreground">{book.pages} pages</div>
            </div>

            <div className="prose max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button onClick={handleBuyNow} size="lg" className="w-full">
                Buy Now - $29.99
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
