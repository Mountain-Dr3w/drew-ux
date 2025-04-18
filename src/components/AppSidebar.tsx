
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from "@/components/ui/sidebar";
import { LucideIcon, ScrollText, Home, Laptop } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const items: NavItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Veriflux Case Study",
    url: "/case-study/veriflux",
    icon: ScrollText,
  },
  {
    title: "Jigsaw Case Study",
    url: "/case-study/jigsaw",
    icon: ScrollText,
  },
  {
    title: "LogisticsPro Case Study",
    url: "/case-study/deftech",
    icon: ScrollText,
  }
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
