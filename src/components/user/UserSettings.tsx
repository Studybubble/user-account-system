import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { DashboardLayout } from "@/components/DashboardLayout";

export function UserSettings() {
  const { name, setName } = useUser();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("profile");
  
  const [profileName, setProfileName] = useState(name);
  const [email, setEmail] = useState("user@example.com");
  
  const [allowDataCollection, setAllowDataCollection] = useState(true);
  
  const handleSaveProfile = () => {
    setName(profileName);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
      duration: 3000,
    });
  };
  
  const handleSavePrivacy = () => {
    toast({
      title: "Privacy Settings Updated",
      description: "Your privacy settings have been saved successfully.",
      duration: 3000,
    });
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Settings</h1>
          <p className="text-muted-foreground">Manage your profile and preferences</p>
        </div>
        
        <Card className="p-6">
          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-6 border-b w-full rounded-none bg-transparent p-0 h-auto">
              <TabsTrigger 
                value="profile"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="privacy"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
              >
                Privacy
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Profile Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Update your personal information
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Username</Label>
                    <Input 
                      id="username"
                      value={name}
                      readOnly
                      className="bg-muted text-muted-foreground cursor-not-allowed"
                    />
                    <p className="text-sm text-muted-foreground">
                      Your username cannot be changed. It is unique to your account.
                    </p>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="display-name">Display Name</Label>
                    <Input 
                      id="display-name"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    variant="default" 
                    className="bg-purple-500 hover:bg-purple-600"
                    onClick={handleSaveProfile}
                  >
                    Save Profile
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="privacy" className="mt-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Privacy Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage your privacy preferences
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-collection">Data Collection</Label>
                      <p className="text-sm text-muted-foreground">
                        Allow us to collect usage data to improve your experience
                      </p>
                    </div>
                    <Switch
                      id="data-collection"
                      checked={allowDataCollection}
                      onCheckedChange={setAllowDataCollection}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    variant="default" 
                    className="bg-purple-500 hover:bg-purple-600"
                    onClick={handleSavePrivacy}
                  >
                    Save Privacy Settings
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </DashboardLayout>
  );
}
