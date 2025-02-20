
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", plan: "Monthly", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", plan: "Pay-per-book", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", plan: "Monthly", status: "Inactive" },
];

export const AdminUsers = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.plan}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {user.status}
                </span>
              </TableCell>
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
