import { CocktailsModel } from "@/cocktailsmodel";
import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: CocktailsModel[];
  addItem: (data: CocktailsModel) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  totalPrice: () => number;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CocktailsModel) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.idDrink === data.idDrink
        );

        if (existingItemIndex !== -1) {
          // Increase the quantity of the existing item
          const newItems = [...currentItems];
          newItems[existingItemIndex].quantity! += 1;
          set({ items: newItems });
          toast.success(`${data.strDrink} has been added to your cart`, {
            position: "top-center",
          });
        } else {
          // Add the new item to the cart
          data.quantity = 1; // Initialize quantity
          set({ items: [...currentItems, data] });
          toast.success(`${data.strDrink} has been added to your cart`, {
            position: "top-center",
          });
        }
      },

      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.idDrink !== id)] });
        // toast here
        toast.error(`Item has been removed from your cart`, {
          position: "top-center",
        });
      },
      removeAll: () => set({ items: [] }),
      totalPrice: () =>
        get().items.reduce(
          (total, item) => total + parseFloat(item.strPrice!) * item.quantity!,
          0
        ),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
