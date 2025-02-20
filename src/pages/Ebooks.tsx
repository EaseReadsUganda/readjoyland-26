
import { useState } from "react";
import { Search, BookIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  type: "Document" | "Book";
  progress?: number;
  coverUrl?: string;
}

const Ebooks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const books: Book[] = [
    {
      id: "1",
      title: "The Art of Digital Reading",
      author: "Added by ReadJoy Team",
      pages: 257,
      type: "Document",
      progress: 73,
    },
    {
      id: "2",
      title: "Modern African Literature",
      author: "Added by Literary Experts",
      pages: 189,
      type: "Document",
      progress: 85,
    },
    {
      id: "3",
      title: "Understanding Ugandan History",
      author: "Added by Historical Society",
      pages: 342,
      type: "Document",
      progress: 60,
    },
    {
      id: "4",
      title: "Business Skills for Entrepreneurs",
      author: "Added by Business Hub",
      pages: 156,
      type: "Document",
      progress: 90,
    },
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container max-w-6xl mx-auto">
        {/* Search Section */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search documents..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* For You Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                  {book.progress && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted-foreground/20">
                      <div
                        className="h-full bg-accent"
                        style={{ width: `${book.progress}%` }}
                      />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <span className="text-xs text-muted-foreground mb-1 block">
                    {book.type}
                  </span>
                  <h3 className="font-medium text-base mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {book.author}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {book.pages} pages
                    </span>
                    <button className="text-accent hover:text-accent/80">
                      <BookIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ebooks;
