import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface OrderStore {
  completedOrders: number;
  totalRevenue: number;
  addOrder: (price: number) => void;
}

const useOrder = create(
  persist<OrderStore>(
    (set) => ({
      completedOrders: 0,
      totalRevenue: 0,
      addOrder: (price: number) => set((state) => ({
        completedOrders: state.completedOrders + 1,
        totalRevenue: state.totalRevenue + price,
      })),
    }),
    {
      name: "order-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useOrder;
