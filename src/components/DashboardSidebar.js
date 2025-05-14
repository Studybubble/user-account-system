
import React from 'react';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';

const userNavItems = [
  {
    title: "Dashboard",
    url: "/user",
    icon: "📊",
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
    <div className="bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200 w-64 min-h-screen flex flex-col shadow-md">
      <div className="p-4 border-b border-purple-200">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-medium">Hello, {name}</p>
            <p className="text-xs text-gray-600">User Account</p>
          </div>
          <button
            className="ml-auto p-2 text-gray-600 hover:text-gray-900"
            onClick={handleSignOut}
          >
            🚪
          </button>
        </div>
      </div>
      
      <div className="p-4 flex-1">
        <div className="mb-4">
          <h3 className="text-xs uppercase tracking-wider text-gray-600 font-semibold mb-3">User Menu</h3>
          <nav>
            <ul className="space-y-2">
              {userNavItems.map((item) => (
                <li key={item.title}>
                  <Link 
                    to={item.url} 
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-purple-200 text-gray-700 hover:text-gray-900"
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
  );
}
