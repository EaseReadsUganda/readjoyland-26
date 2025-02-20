
export interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  type: "Document" | "Book";
  progress?: number;
  coverUrl?: string;
  isBookmarked?: boolean;
}
