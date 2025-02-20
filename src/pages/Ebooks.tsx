import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookIcon, Menu, Bookmark, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  type: "Document" | "Book";
  progress?: number;
  coverUrl?: string;
  isBookmarked?: boolean;
}

const Ebooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "The Art of Digital Reading",
      author: "Added by ReadJoy Team",
      pages: 257,
      type: "Document",
      progress: 73,
      isBookmarked: false,
    },
    {
      id: "2",
      title: "Modern African Literature",
      author: "Added by Literary Experts",
      pages: 189,
      type: "Document",
      progress: 85,
      isBookmarked: true,
    },
    {
      id: "3",
      title: "Understanding Ugandan History",
      author: "Added by Historical Society",
      pages: 342,
      type: "Document",
      progress: 60,
      isBookmarked: false,
    },
    {
      id: "4",
      title: "Business Skills for Entrepreneurs",
      author: "Added by Business Hub",
      pages: 156,
      type: "Document",
      progress: 90,
      isBookmarked: false,
    },
  ]);

  const toggleBookmark = (bookId: string) => {
    setBooks(books.map(book => 
      book.id === bookId 
        ? { ...book, isBookmarked: !book.isBookmarked }
        : book
    ));
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="w-8 h-8 text-accent" />
              <span className="text-xl font-semibold">ReadJoy</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/ebooks" className="text-foreground hover:text-accent transition-colors">
                eBooks
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="p-2 text-muted-foreground hover:text-foreground md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Search */}
      <div className="md:hidden p-4 border-b border-border bg-white">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Search documents..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-8">
        {/* For You Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">For You</h2>
            <button className="text-accent hover:text-accent/80 text-sm font-medium">
              View More
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="aspect-[3/4] bg-muted relative">
                  {book.coverUrl ? (
                    <img
                      src={book.coverUrl}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-secondary">
                      <BookIcon className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  {/* Bookmark Button */}
                  <button
                    onClick={() => toggleBookmark(book.id)}
                    className={`absolute top-2 right-2 p-2 rounded-full bg-white/90 shadow-sm transition-all duration-300 ${
                      book.isBookmarked ? 'text-accent' : 'text-muted-foreground'
                    } opacity-0 group-hover:opacity-100 ${
                      book.isBookmarked && 'opacity-100'
                    }`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </button>
                  {/* Progress Bar */}
                  {book.progress && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted-foreground/20">
                      <div
                        className="h-full bg-accent transition-all duration-300"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-muted-foreground mb-1 block">
                    {book.type}
                  </span>
                  <h3 className="font-medium text-base mb-1 line-clamp-2 group-hover:text-accent transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {book.author}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {book.pages - Math.floor(book.pages * (book.progress || 0) / 100)} pages left
                    </span>
                    <button className="text-accent hover:text-accent/80 transition-colors">
                      <BookOpen className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ebooks;
