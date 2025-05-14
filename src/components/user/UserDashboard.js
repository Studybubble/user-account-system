
import React from 'react';
import { useEvents } from '../../context/EventsContext';
import { useUser } from '../../context/UserContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { DashboardLayout } from '../DashboardLayout';

export function UserDashboard() {
  const { events } = useEvents();
  const { registeredEvents, registerForEvent } = useUser();
  
  // Get upcoming events and filter out ones the user is already registered for
  const upcomingEvents = events
    .filter(event => event.status === 'upcoming')
    .filter(event => !registeredEvents.includes(event.id))
    .slice(0, 3); // Just show 3 events max
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-500">Welcome back to your event dashboard.</p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map(event => (
                <Card key={event.id} className="overflow-hidden">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={event.imageUrl} 
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{new Date(event.date).toLocaleDateString()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2 text-sm">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => registerForEvent(event.id)}
                      className="w-full"
                    >
                      Register Now
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full bg-gray-50 p-6 text-center rounded-lg">
                <p className="text-gray-500">No upcoming events available.</p>
              </div>
            )}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Registered Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{registeredEvents.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Total Points</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">100</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Available Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">3</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
