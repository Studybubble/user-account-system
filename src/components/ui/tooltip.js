
import React from 'react';
import { cn } from "../../lib/utils";

export const TooltipProvider = ({ children }) => {
  return <>{children}</>;
};

export const Tooltip = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const TooltipTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button 
      ref={ref} 
      className={cn("inline-flex", className)} 
      {...props}
    >
      {children}
    </button>
  );
});
TooltipTrigger.displayName = "TooltipTrigger";

export const TooltipContent = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
TooltipContent.displayName = "TooltipContent";
