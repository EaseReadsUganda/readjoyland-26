
import { BookIcon, Bookmark, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Book } from "../types/book";

interface BookCardProps {
  book: Book;
  index: number;
  onToggleBookmark: (id: string) => void;
}

export const BookCard = ({ book, index, onToggleBookmark }: BookCardProps) => {
  return (
    <motion.div
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
        <button
          onClick={() => onToggleBookmark(book.id)}
          className={`absolute top-2 right-2 p-2 rounded-full bg-white/90 shadow-sm transition-all duration-300 ${
            book.isBookmarked ? 'text-accent' : 'text-muted-foreground'
          } opacity-0 group-hover:opacity-100 ${
            book.isBookmarked && 'opacity-100'
          }`}
        >
          <Bookmark className="w-5 h-5" />
        </button>
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
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-muted-foreground">
            {book.type}
          </span>
          <span className="text-xs font-medium text-accent">
            {book.category}
          </span>
        </div>
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
  );
};
