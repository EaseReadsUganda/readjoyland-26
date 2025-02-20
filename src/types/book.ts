
export interface Book {
  id: string;
  title: string;
  author: string;
  pages: number;
  type: "Document" | "Book";
  category: "Academic" | "Professional" | "Culture" | "Hobbies & Crafts" | "Personal Growth";
  progress?: number;
  coverUrl?: string;
  isBookmarked?: boolean;
}
