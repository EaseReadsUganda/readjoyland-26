
import { useState } from "react";
import { Header } from "../components/layout/Header";
import { SearchBar } from "../components/SearchBar";
import { BookCard } from "../components/BookCard";
import { Book } from "../types/book";

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
      <Header />
      
      {/* Mobile Search */}
      <div className="md:hidden p-4 border-b border-border bg-white">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">For You</h2>
            <button className="text-accent hover:text-accent/80 text-sm font-medium">
              View More
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map((book, index) => (
              <BookCard
                key={book.id}
                book={book}
                index={index}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ebooks;
