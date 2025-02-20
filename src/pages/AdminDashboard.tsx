
import { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CreditCard, LineChart, Settings, Users } from "lucide-react";
import { AdminStats } from "../components/admin/AdminStats";
import { AdminUsers } from "../components/admin/AdminUsers";
import { AdminBooks } from "../components/admin/AdminBooks";
import { AdminSettings } from "../components/admin/AdminSettings";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container max-w-6xl mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>

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
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <CreditCard className="w-4 h-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <AdminUsers />
          </TabsContent>

          <TabsContent value="books" className="space-y-4">
            <AdminBooks />
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            <div className="rounded-md border p-4 text-center text-muted-foreground">
              Payments management feature coming soon
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
