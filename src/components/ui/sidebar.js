
import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../lib/utils';

const SidebarContext = createContext({
  open: true,
  toggleSidebar: () => {},
});

export function useSidebar() {
  return useContext(SidebarContext);
}

export function SidebarProvider({ children }) {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen(prev => !prev);

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const SidebarTrigger = ({ className, ...props }) => {
  const { open, toggleSidebar } = useSidebar();
  
  return (
    <button
      onClick={toggleSidebar}
      className={cn("p-2 rounded-md hover:bg-gray-200", className)}
      {...props}
    >
      {open ? '←' : '→'}
    </button>
  );
};

export const Sidebar = ({ className, children, ...props }) => {
  const { open } = useSidebar();
  
  return open ? (
    <aside
      className={cn("w-64 min-h-screen bg-white border-r", className)}
      {...props}
    >
      {children}
    </aside>
  ) : null;
};

export const SidebarHeader = ({ className, children, ...props }) => (
  <div
    className={cn("p-4 border-b", className)}
    {...props}
  >
    {children}
  </div>
);

export const SidebarContent = ({ className, children, ...props }) => (
  <div
    className={cn("p-4", className)}
    {...props}
  >
    {children}
  </div>
);

export const SidebarFooter = ({ className, children, ...props }) => (
  <div
    className={cn("p-4 mt-auto border-t", className)}
    {...props}
  >
    {children}
  </div>
);

export const SidebarGroup = ({ className, children, ...props }) => (
  <div
    className={cn("mb-4", className)}
    {...props}
  >
    {children}
  </div>
);

export const SidebarGroupLabel = ({ className, children, ...props }) => (
  <div
    className={cn("text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2", className)}
    {...props}
  >
    {children}
  </div>
);

export const SidebarGroupContent = ({ className, children, ...props }) => (
  <div
    className={cn("", className)}
    {...props}
  >
    {children}
  </div>
);

export const SidebarMenu = ({ className, children, ...props }) => (
  <nav
    className={cn("space-y-1", className)}
    {...props}
  >
    <ul>{children}</ul>
  </nav>
);

export const SidebarMenuItem = ({ className, children, ...props }) => (
  <li
    className={cn("", className)}
    {...props}
  >
    {children}
  </li>
);

export const SidebarMenuButton = React.forwardRef(({ className, asChild = false, children, ...props }, ref) => {
  const Comp = asChild ? React.Fragment : 'button';
  
  if (asChild && React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ...props,
      className: cn(
        "flex items-center w-full gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
        children.props.className,
        className
      ),
      ref
    });
  }
  
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex items-center w-full gap-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
});
SidebarMenuButton.displayName = "SidebarMenuButton";
