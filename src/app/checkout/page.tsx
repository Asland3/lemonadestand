"use client";

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

function Checkout() {
  const cart = useCart();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Shipping information</CardTitle>
        <CardDescription>
          Enter your shipping address and payment information
        </CardDescription>
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
            <Select defaultValue="usa" id="country">
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
            <div className="grid gap-2 text-sm" key={item.idDrink}>
              <div className="flex items-center justify-between">
                <div>Old Fashioned (x2)</div>
                <div>$20.00</div>
              </div>
              {/* <div className="flex items-center justify-between">
                <div>Manhattan (x1)</div>
                <div>$10.00</div>
              </div>
              <div className="flex items-center justify-between">
                <div>Shipping</div>
                <div>$5.00</div>
              </div>
              <div className="flex items-center justify-between font-medium">
                <div>Total</div>
                <div>$35.00</div>
              </div> */}
            </div>
          ))}
        </div>
        

        <div className="flex justify-between">
          <Button variant={"outline"}>Cancel</Button>
          <Button size={"lg"} className="w-64">
            Pay $35.00
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Checkout;
