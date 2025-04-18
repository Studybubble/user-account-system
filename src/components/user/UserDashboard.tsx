
import React from "react";
import { useUser } from "@/context/UserContext";
import { useEvents } from "@/context/EventsContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";

export function UserDashboard() {
  const { registeredEvents } = useUser();
  const { events } = useEvents();
  
  const userEvents = events.filter(event => 
    registeredEvents.includes(event.id)
  );

  const upcomingEvents = userEvents
    .filter(event => new Date(event.date) > new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events Dashboard</h1>
          <p className="text-muted-foreground">Manage your events and rewards</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-500" />
                <span>My Events</span>
              </CardTitle>
              <CardDescription>Your upcoming registered events</CardDescription>
            </CardHeader>
            <CardContent>
              {upcomingEvents.length > 0 ? (
                <div className="space-y-4">
                  {upcomingEvents.slice(0, 3).map(event => (
                    <div key={event.id} className="border rounded-md p-3 flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Link to={`/user/events/${event.id}`}>
                        <Button variant="outline" size="sm">View</Button>
                      </Link>
                    </div>
                  ))}
                  {upcomingEvents.length > 3 && (
                    <Link to="/user/events" className="text-sm text-cyan-600 hover:underline block text-center">
                      View all events
                    </Link>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>You haven't registered for any upcoming events</p>
                  <Link to="/user/discover">
                    <Button variant="outline" className="mt-2">Discover Events</Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
