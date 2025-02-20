
import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Book } from "../types/book";
import { BookCard } from "../components/BookCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Heart, Settings } from "lucide-react";

const Dashboard = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "The Art of Digital Reading",
      author: "Added by ReadJoy Team",
      pages: 257,
      type: "Document",
      category: "Professional",
      progress: 73,
      isBookmarked: true,
    },
  ]);

  const toggleBookmark = (bookId: string) => {
    setBooks(books.map(book => 
      book.id === bookId 
        ? { ...book, isBookmarked: !book.isBookmarked }
        : book
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-8 flex-grow">
        <h1 className="text-2xl font-bold mb-8">My Library</h1>

        <Tabs defaultValue="library" className="space-y-6">
          <TabsList>
            <TabsTrigger value="library" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Library
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="library" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.map((book, index) => (
                <BookCard
                  key={book.id}
                  book={book}
                  index={index}
                  onToggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wishlist">
            <div className="text-center py-12 text-muted-foreground">
              No books in your wishlist yet.
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    value="user@example.com"
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Notification Preferences
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked readOnly />
                      Email notifications for new books
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" checked readOnly />
                      Weekly reading digests
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
