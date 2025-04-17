
import {
  LayoutDashboard,
  Search,
  LogOut
} from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";

const userNavItems = [
  {
    title: "Dashboard",
    url: "/user",
    icon: LayoutDashboard,
  },
  {
    title: "Discover Events",
    url: "/user/discover",
    icon: Search,
  },
];

export function DashboardSidebar() {
  const { name } = useUser();

  const handleSignOut = () => {
    console.log("Sign out clicked");
  };

  return (
    <Sidebar>
      <SidebarHeader className="bg-gradient-to-r from-green-200 via-purple-200 to-blue-200">
        <div className="flex items-center gap-2 p-4">
          <div className="flex items-center gap-2 flex-1">
            <Avatar className="h-10 w-10 border-2 border-white/20">
              <AvatarFallback className="bg-white/10 text-gray-800">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-800">Hello, {name}</p>
              <p className="text-xs text-gray-600">User Account</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto text-gray-700 hover:bg-white/10"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-gradient-to-b from-green-100 to-purple-100">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-700">User Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-gray-800 hover:bg-white/10">
                    <a href={item.url} className="flex gap-3 items-center">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-gradient-to-t from-blue-100 to-green-100">
        <div className="px-4 py-2 text-xs text-gray-600">
          Events User Dashboard v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
