"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import useOrder from "@/hooks/order-store";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Checkout() {
  const router = useRouter();
  const cart = useCart();
  const order = useOrder();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Shipping information</CardTitle>
        <CardDescription>Enter your shipping address</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:gap-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" required />
          </div>
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>
        </div>
        <div className="grid gap-1">
          <Label className="text-sm" htmlFor="address">
            Address
          </Label>
          <Input
            id="address"
            placeholder="Enter your shipping address"
            required
          />
        </div>
        <div className="grid gap-1">
          <Label className="text-sm" htmlFor="address2">
            Apartment, suite, etc. (optional)
          </Label>
          <Input id="address2" placeholder="Apartment, suite, etc." />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="city">
              City
            </Label>
            <Input id="city" placeholder="Enter your city" required />
          </div>
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="country">
              Country/Region
            </Label>
            <Select defaultValue="usa">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent className="w-full">
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
                <SelectItem value="mexico">Mexico</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="australia">Australia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="zip">
              ZIP
            </Label>
            <Input id="zip" placeholder="Enter your ZIP" required />
          </div>
          <div className="grid gap-1">
            <Label className="text-sm" htmlFor="phone">
              Phone
            </Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              required
              type="tel"
            />
          </div>
        </div>
        <Separator className="my-4" />

        <div className="grid gap-2">
          <Label className="text-lg font-bold" htmlFor="address">
            Order Summary
          </Label>
          {cart.items.map((item) => (
            <div className="grid gap-2" key={item.idDrink}>
              <div className="flex items-center justify-between">
                <div className="">
                  {item.strDrink} <span>x {item.quantity}</span>
                </div>
                <div className="font-semibold">${item.strPrice}</div>
              </div>
            </div>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div className="font-semibold">${cart.subTotal().toFixed(2)}</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping</div>
            <div className="font-semibold">
              ${cart.shippingCost().toFixed(2)}
            </div>
          </div>
          <div className="flex justify-between">
            <div>Tax</div>
            <div className="font-semibold">${cart.tax().toFixed(2)}</div>
          </div>
          <div className="flex justify-between">
            <div>Total</div>
            <div className="font-semibold">${cart.totalPrice().toFixed(2)}</div>
          </div>
        </div>

        <div className="flex justify-between">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant={"outline"}>Cancel</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action will cancel your order and take you back the the
                  front page.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Abort</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Link href="/">Continue</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            size={"lg"}
            className="w-64"
            onClick={() => {
              order.addOrder(cart.totalPrice());
              cart.removeAll();
              router.push("/confirmation");
            }}
          >
            Pay ${cart.totalPrice().toFixed(2)}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Checkout;
