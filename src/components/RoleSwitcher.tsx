
import React from "react";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function RoleSwitcher() {
  const { role, setRole, setName } = useUser();
  const navigate = useNavigate();

  const switchToAdmin = () => {
    setRole("admin");
    setName("Admin");
    navigate("/");
  };

  const switchToUser = () => {
    setRole("user");
    setName("John Doe");
    navigate("/user");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-md rounded-md p-2 border z-50">
      <div className="flex gap-2">
        <Button
          variant={role === "admin" ? "default" : "outline"}
          size="sm"
          onClick={switchToAdmin}
        >
          Admin View
        </Button>
        <Button
          variant={role === "user" ? "default" : "outline"}
          size="sm"
          onClick={switchToUser}
        >
          User View
        </Button>
      </div>
    </div>
  );
}
