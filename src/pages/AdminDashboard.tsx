
import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, LineChart, Settings } from "lucide-react";
import { AdminStats } from "../components/admin/AdminStats";
import { AdminUsers } from "../components/admin/AdminUsers";
import { AdminBooks } from "../components/admin/AdminBooks";
import { AdminSettings } from "../components/admin/AdminSettings";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-8 flex-grow">
        <h1 className="text-2xl font-bold mb-8">Admin Dashboard</h1>

        <AdminStats />

        <Tabs defaultValue="users" className="space-y-6 mt-8">
          <TabsList>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Books
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <AdminUsers />
          </TabsContent>

          <TabsContent value="books">
            <AdminBooks />
          </TabsContent>

          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
