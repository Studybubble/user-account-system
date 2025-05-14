
import React from "react";

const Button = ({ 
  children, 
  className = "", 
  variant = "default", 
  size = "default", 
  asChild = false, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variantStyles = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-100",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    ghost: "hover:bg-gray-100",
    link: "text-purple-600 underline-offset-4 hover:underline"
  };
  
  const sizeStyles = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  };

  const allClassNames = `${baseStyles} ${variantStyles[variant] || variantStyles.default} ${sizeStyles[size] || sizeStyles.default} ${className}`;

  // If asChild is true, we should clone the child and add our props
  if (asChild && React.Children.count(children) === 1) {
    return React.cloneElement(children, {
      ...props,
      className: `${children.props.className || ""} ${allClassNames}`.trim()
    });
  }
  
  return (
    <button className={allClassNames} {...props}>
      {children}
    </button>
  );
};

export { Button };
