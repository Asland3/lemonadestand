"use client";

import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import useOrder from "@/hooks/order-store";

function Dashboard() {
  const order = useOrder();
  return (
    <main className="flex flex-1 flex-col p-4 md:p-10">
      <div className="flex flex-col gap-4">
        <div className="grid gap-1">
          <h1 className="font-semibold text-2xl">Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your total revenue and completed orders.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">${order.totalRevenue.toFixed(2)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Completed Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                +{order.completedOrders}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
