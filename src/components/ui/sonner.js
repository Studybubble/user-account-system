
import React from 'react';

// A simple sonner component to replace the shadcn one
export function Toaster() {
  return <div id="sonner-container" className="fixed bottom-4 right-4 z-50"></div>;
}

export const toast = {
  success: (message) => {
    console.log('Toast success:', message);
    // Implementation would go here in a real app
  },
  error: (message) => {
    console.log('Toast error:', message);
    // Implementation would go here in a real app
  }
};
