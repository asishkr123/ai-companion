"use client";

import { Home, Plus, Settings } from "lucide-react";
import { FunctionComponent } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarProps {}

const routes = [
  {
    icon: Home,
    href: "/",
    label: "Home",
  },
  {
    icon: Plus,
    href: "/companion/new",
    label: "Create",
  },
  {
    icon: Settings,
    href: "/settings",
    label: "Settings",
  },
];

const Sidebar: FunctionComponent<SidebarProps> = () => {
  const pathname = usePathname();
  const router = useRouter();
  const onNavigate = (url: string) => {
    return router.push(url);
  };
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => {
            return (
              <div
                key={route.href}
                className={cn(
                  "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  pathname === route.href && "bg-primary/10 text-primary"
                )}
                onClick={() => onNavigate(route.href)}
              >
                <div className="flex-col flex gap-y-2 items-center flex-1">
                  <route.icon className="h-5 w-5" />
                  {route.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
