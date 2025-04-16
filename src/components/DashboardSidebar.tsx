
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
    title: "My Events",
    url: "/user/events",
    icon: CalendarDays,
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
      <SidebarHeader className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-green-100">
        <div className="flex items-center gap-2 p-4">
          <div className="flex items-center gap-2 flex-1">
            <Avatar className="h-10 w-10 border-2 border-green-200">
              <AvatarFallback className="bg-green-500 text-black">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Hello, {name}</p>
              <p className="text-xs text-muted-foreground">User Account</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 text-black" />
            </Button>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-green-100">
        <SidebarGroup>
          <SidebarGroupLabel>User Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex gap-3 items-center">
                      <item.icon className="h-5 w-5 text-black" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-gradient-to-b from-yellow-50 via-yellow-100 to-green-100">
        <div className="px-4 py-2 text-xs text-green-700">
          Events User Dashboard v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

