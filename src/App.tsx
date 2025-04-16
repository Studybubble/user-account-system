
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventsProvider } from "@/context/EventsContext";
import { UserProvider } from "@/context/UserContext";
import { UserDashboard } from "@/components/user/UserDashboard";
import { UserWallet } from "@/components/user/UserWallet";
import { UserSettings } from "@/components/user/UserSettings";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Import implemented pages
import EventsList from "./pages/EventsList";

// Placeholder components for routes that aren't implemented yet
const EventDetail = () => <div>Event Detail</div>;
const EventForm = () => <div>Event Form</div>;
const AttendeesList = () => <div>Attendees List</div>;
const Settings = () => <div>Settings</div>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <UserProvider>
        <EventsProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Admin Routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/events" element={<EventsList />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/events/create" element={<EventForm />} />
              <Route path="/events/edit/:id" element={<EventForm />} />
              <Route path="/attendees" element={<AttendeesList />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* User Routes */}
              <Route path="/user" element={<UserDashboard />} />
              <Route path="/user/wallet" element={<UserWallet />} />
              <Route path="/user/settings" element={<UserSettings />} />
              <Route path="/user/events/:id" element={<EventDetail />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </EventsProvider>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
