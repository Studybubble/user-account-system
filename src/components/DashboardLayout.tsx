
import { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Menu } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col min-h-screen bg-gray-50">
          <div className="flex flex-col gap-4 p-4 sm:p-8 lg:p-12">
            <div className="flex justify-start">
              <SidebarTrigger className="bg-gradient-to-r from-purple-500 to-blue-400 text-white p-2 rounded-md hover:opacity-90 transition-opacity">
                <Menu className="h-5 w-5" />
              </SidebarTrigger>
            </div>
            <div className="flex-1">
              {children}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
