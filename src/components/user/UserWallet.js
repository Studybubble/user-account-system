
import React from 'react';
import { useUser } from '../../context/UserContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { DashboardLayout } from '../DashboardLayout';
import { toast } from '../ui/toast';

export function UserWallet() {
  const { wallet, redeemDiscount } = useUser();
  
  const handleRedeemDiscount = (discountId) => {
    const success = redeemDiscount(discountId);
    if (success) {
      toast({
        title: "Success",
        description: "Discount redeemed successfully!",
      });
    } else {
      toast({
        title: "Insufficient Points",
        description: "You don't have enough points to redeem this discount.",
        variant: "destructive",
      });
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
          <Card>
            <CardHeader>
              <CardTitle>Points Balance</CardTitle>
              <CardDescription>Your current points balance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-purple-600">{wallet.points} Points</div>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Available Discounts</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {wallet.discounts.map(discount => (
                <Card key={discount.id}>
                  <CardHeader>
                    <CardTitle>{discount.name}</CardTitle>
                    <CardDescription>{discount.percentOff}% off your next purchase</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Cost: {discount.pointCost} points</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={() => handleRedeemDiscount(discount.id)}
                      disabled={wallet.points < discount.pointCost}
                      className="w-full"
                    >
                      Redeem Discount
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">How to Earn Points</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Register for events (25 points)</li>
                  <li>Attend events (50 points)</li>
                  <li>Refer friends (100 points)</li>
                  <li>Complete surveys (20 points)</li>
                  <li>Leave feedback (15 points)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
