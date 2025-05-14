
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  name: "John Doe",
  setName: () => {},
  wallet: {
    points: 0,
    discounts: []
  },
  addPoints: () => {},
  redeemDiscount: () => false,
  registeredEvents: [],
  registerForEvent: () => {},
  cancelRegistration: () => {},
});

export function UserProvider({ children }) {
  const [name, setName] = useState("John Doe");
  const [wallet, setWallet] = useState({
    points: 100, // Starting with some points
    discounts: [
      { id: "disc1", name: "10% Off", percentOff: 10, pointCost: 50 },
      { id: "disc2", name: "25% Off", percentOff: 25, pointCost: 100 },
      { id: "disc3", name: "50% Off", percentOff: 50, pointCost: 200 }
    ]
  });
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const addPoints = (points) => {
    setWallet(prev => ({
      ...prev,
      points: prev.points + points
    }));
  };

  const redeemDiscount = (discountId) => {
    const discount = wallet.discounts.find(d => d.id === discountId);
    if (discount && wallet.points >= discount.pointCost) {
      setWallet(prev => ({
        ...prev,
        points: prev.points - discount.pointCost
      }));
      return true;
    }
    return false;
  };

  const registerForEvent = (eventId) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents(prev => [...prev, eventId]);
    }
  };

  const cancelRegistration = (eventId) => {
    setRegisteredEvents(prev => prev.filter(id => id !== eventId));
  };

  return (
    <UserContext.Provider value={{
      name,
      setName,
      wallet,
      addPoints,
      redeemDiscount,
      registeredEvents,
      registerForEvent,
      cancelRegistration
    }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
