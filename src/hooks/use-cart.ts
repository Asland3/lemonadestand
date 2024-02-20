import { CocktailsModel } from "@/cocktailsmodel";
import { toast } from "sonner";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: CocktailsModel[];
  addItem: (data: CocktailsModel) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CocktailsModel) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.idDrink === data.idDrink
        );

        if (existingItem) {
          // Add a toast here
          toast.error(`${data.strDrink} is already in your cart`, {
            position: "top-center",
          });
        }

        set({ items: [...get().items, data] });
        toast.success(`${data.strDrink} has been added to your cart`, {
          position: "top-center",
        });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.idDrink !== id)] });
        // toast here
        toast.error(`Item has been removed from your cart`, {
          position: "top-center",
        });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
