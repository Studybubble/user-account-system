
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EventsProvider } from "./context/EventsContext";
import { UserProvider } from "./context/UserContext";
import { UserDashboard } from "./components/user/UserDashboard";
import { UserWallet } from "./components/user/UserWallet";
import { UserSettings } from "./components/user/UserSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder components for routes that aren't implemented yet
const EventDetail = () => <div>Event Detail</div>;
const DiscoverEvents = () => <div>Discover Events</div>;
const UserEvents = () => <div>My Events</div>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <EventsProvider>
        <BrowserRouter>
          <Routes>
            {/* Redirect root to user dashboard */}
            <Route path="/" element={<Navigate to="/user" replace />} />
            
            {/* User Routes */}
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/user/discover" element={<DiscoverEvents />} />
            <Route path="/user/events" element={<UserEvents />} />
            <Route path="/user/wallet" element={<UserWallet />} />
            <Route path="/user/settings" element={<UserSettings />} />
            <Route path="/user/events/:id" element={<EventDetail />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </EventsProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
