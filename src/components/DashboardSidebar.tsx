
import {
  LayoutDashboard,
  CalendarDays,
  Settings,
  LogOut,
  Wallet,
  Search
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
  {
    title: "My Wallet",
    url: "/user/wallet",
    icon: Wallet,
  },
  {
    title: "Settings",
    url: "/user/settings",
    icon: Settings,
  },
];

export function DashboardSidebar() {
  const { name } = useUser();

  const handleSignOut = () => {
    console.log("Sign out clicked");
  };

  return (
    <Sidebar>
      <SidebarHeader className="bg-gradient-to-r from-purple-500 via-purple-400 to-blue-400">
        <div className="flex items-center gap-2 p-4">
          <div className="flex items-center gap-2 flex-1">
            <Avatar className="h-10 w-10 border-2 border-white/20">
              <AvatarFallback className="bg-white/10 text-white">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">Hello, {name}</p>
              <p className="text-xs text-white/80">User Account</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto text-white hover:bg-white/10"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-gradient-to-b from-purple-500 to-blue-400">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white/90">User Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-white hover:bg-white/10">
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
      <SidebarFooter className="bg-gradient-to-t from-blue-400 to-blue-500">
        <div className="px-4 py-2 text-xs text-white/80">
          Events User Dashboard v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
