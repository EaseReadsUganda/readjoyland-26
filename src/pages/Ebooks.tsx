
import { useState, useEffect } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SearchBar } from "../components/SearchBar";
import { BookCard } from "../components/BookCard";
import { Book } from "../types/book";
import { supabase } from "@/integrations/supabase/client";

const Ebooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const { data, error } = await supabase
        .from('books')
        .select('*');
      
      if (error) throw error;
      
      const fetchedBooks = data?.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author,
        pages: book.pages || 0,
        type: book.type || 'Document',
        category: book.category || 'General',
        progress: 0,
        isBookmarked: false
      })) || [];

      setBooks(fetchedBooks);
      
      // Extract unique categories
      const uniqueCategories = Array.from(new Set(fetchedBooks.map(book => book.category)));
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleBookmark = async (bookId: string) => {
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Mobile Search */}
      <div className="md:hidden p-4 border-b border-border bg-white">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 py-8 flex-grow">
        {/* Categories */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-left"
              >
                <span className="text-sm font-medium">{category}</span>
                <span className="block text-xs text-muted-foreground mt-1">
                  {books.filter(book => book.category === category).length} books
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Books Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">For You</h2>
          </div>
          
          {loading ? (
            <div className="text-center py-12 text-muted-foreground">
              Loading books...
            </div>
          ) : filteredBooks.length > 0 ? (
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
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              No books found matching your search.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ebooks;
