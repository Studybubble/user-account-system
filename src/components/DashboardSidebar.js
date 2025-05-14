
import React from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';

const userNavItems = [
  {
    title: "Dashboard",
    url: "/user",
    icon: "📊", // Using emoji instead of lucide icons
  },
  {
    title: "Discover Events",
    url: "/user/discover",
    icon: "🔍",
  },
  {
    title: "My Wallet",
    url: "/user/wallet",
    icon: "💰",
  },
  {
    title: "Settings",
    url: "/user/settings",
    icon: "⚙️",
  },
];

export function DashboardSidebar() {
  const { name } = useUser();

  const handleSignOut = () => {
    console.log("Sign out clicked");
  };

  return (
    <aside className="w-64 min-h-screen bg-white border-r">
      <div className="p-4 border-b bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 flex-1">
            <div className="h-10 w-10 border-2 border-purple-200 rounded-full bg-purple-500 text-white flex items-center justify-center">
              {name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium">Hello, {name}</p>
              <p className="text-xs text-muted-foreground">User Account</p>
            </div>
            <button
              className="ml-auto p-2 rounded-md hover:bg-gray-200"
              onClick={handleSignOut}
            >
              🚪
            </button>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200">
        <div className="mb-4">
          <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
            User Menu
          </div>
          <div>
            <nav className="space-y-1">
              <ul>
                {userNavItems.map((item) => (
                  <li key={item.title}>
                    <Link 
                      to={item.url} 
                      className="flex gap-3 items-center w-full px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}
