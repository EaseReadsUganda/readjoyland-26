
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

const books = [
  { id: 1, title: "The Art of Digital Reading", author: "ReadJoy Team", category: "Professional", downloads: 156 },
  { id: 2, title: "Modern Web Development", author: "Tech Authors", category: "Academic", downloads: 89 },
  { id: 3, title: "Digital Marketing Basics", author: "Marketing Pros", category: "Professional", downloads: 234 },
];

export const AdminBooks = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Downloads</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell className="font-medium">{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.category}</TableCell>
              <TableCell>{book.downloads}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button variant="ghost" size="sm">
                  <Edit2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
