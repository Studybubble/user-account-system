
import { ReactNode } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from '@/components/DashboardSidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <main className="flex-1 flex flex-col min-h-screen bg-beige-50">
          <div className="flex flex-col gap-4 p-4 sm:p-8 lg:p-12">
            <div className="flex justify-start">
              <SidebarTrigger />
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
