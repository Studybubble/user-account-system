
import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { DashboardLayout } from '../DashboardLayout';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { toast } from '../ui/toast';

export function UserSettings() {
  const { name, setName } = useUser();
  const [editName, setEditName] = useState(name);
  const [notifications, setNotifications] = useState({
    email: true,
    app: true,
    marketing: false
  });
  
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setName(editName);
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };
  
  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleDeleteAccount = () => {
    // In a real app, this would have a proper confirmation flow
    toast({
      title: "Not Implemented",
      description: "Account deletion functionality is not available in this demo.",
      variant: "destructive",
    });
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-gray-500">Manage your account settings and preferences.</p>
        </div>
        
        <div className="grid gap-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpdateProfile}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Display Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
                    />
                  </div>
                  <Button type="submit">Update Profile</Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive email notifications about your events</p>
                  </div>
                  <div 
                    className={`w-11 h-6 rounded-full p-1 cursor-pointer ${notifications.email ? 'bg-purple-600' : 'bg-gray-300'}`}
                    onClick={() => handleNotificationChange('email')}
                  >
                    <div 
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${notifications.email ? 'translate-x-5' : ''}`} 
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">App Notifications</h3>
                    <p className="text-sm text-gray-500">Receive in-app notifications</p>
                  </div>
                  <div 
                    className={`w-11 h-6 rounded-full p-1 cursor-pointer ${notifications.app ? 'bg-purple-600' : 'bg-gray-300'}`}
                    onClick={() => handleNotificationChange('app')}
                  >
                    <div 
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${notifications.app ? 'translate-x-5' : ''}`} 
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium">Marketing Emails</h3>
                    <p className="text-sm text-gray-500">Receive marketing and promotional emails</p>
                  </div>
                  <div 
                    className={`w-11 h-6 rounded-full p-1 cursor-pointer ${notifications.marketing ? 'bg-purple-600' : 'bg-gray-300'}`}
                    onClick={() => handleNotificationChange('marketing')}
                  >
                    <div 
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${notifications.marketing ? 'translate-x-5' : ''}`} 
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Danger Zone */}
          <Card className="border-red-100">
            <CardHeader>
              <CardTitle className="text-red-600">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Once you delete your account, there is no going back. Please be certain.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="destructive" 
                onClick={handleDeleteAccount}
              >
                Delete Account
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
