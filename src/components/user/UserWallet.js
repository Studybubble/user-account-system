
import React from 'react';
import { useUser } from '../../context/UserContext';
import { DashboardLayout } from '../DashboardLayout';

export function UserWallet() {
  const { wallet, redeemDiscount } = useUser();
  
  const handleRedeemDiscount = (discountId) => {
    const success = redeemDiscount(discountId);
    if (success) {
      alert("Discount redeemed successfully!");
    } else {
      alert("Insufficient points to redeem this discount.");
    }
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Wallet</h1>
          <p className="text-gray-500">Manage your points and discounts here.</p>
        </div>
        
        <div className="grid gap-4">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <div className="mb-2">
              <h3 className="text-2xl font-semibold leading-none tracking-tight">Points Balance</h3>
              <p className="text-sm text-muted-foreground">Your current points balance</p>
            </div>
            <div className="p-6 pt-0">
              <div className="text-4xl font-bold text-purple-600">{wallet.points} Points</div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Available Discounts</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {wallet.discounts.map(discount => (
                <div key={discount.id} className="bg-white rounded-lg border shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">{discount.name}</h3>
                    <p className="text-sm text-muted-foreground">{discount.percentOff}% off your next purchase</p>
                  </div>
                  <div className="p-6 pt-0">
                    <p className="text-sm text-gray-500">Cost: {discount.pointCost} points</p>
                  </div>
                  <div className="flex items-center p-6 pt-0">
                    <button
                      onClick={() => handleRedeemDiscount(discount.id)}
                      disabled={wallet.points < discount.pointCost}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-purple-600 text-white px-4 py-2 w-full disabled:opacity-50 disabled:pointer-events-none hover:bg-purple-700"
                    >
                      Redeem Discount
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">How to Earn Points</h2>
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Register for events (25 points)</li>
                  <li>Attend events (50 points)</li>
                  <li>Refer friends (100 points)</li>
                  <li>Complete surveys (20 points)</li>
                  <li>Leave feedback (15 points)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
