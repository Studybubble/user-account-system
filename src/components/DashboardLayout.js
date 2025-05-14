
import React from 'react';
import { DashboardSidebar } from './DashboardSidebar';

export function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  
  return (
    <div className="min-h-screen flex w-full">
      {sidebarOpen && <DashboardSidebar />}
      <main className="flex-1 flex flex-col min-h-screen bg-gray-50">
        <div className="flex flex-col gap-4 p-4 sm:p-8 lg:p-12">
          <div className="flex justify-start">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-200"
            >
              {sidebarOpen ? '←' : '→'}
            </button>
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
