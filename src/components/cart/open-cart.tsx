"use client"
import React from "react"
import {
  OpenSheet,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"
import { Button } from "../ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "./cart-context"
import Image from "next/image"
import Link from "next/link"

const CartButton = () => {
  const { cart } = useCart()

  return (
    <OpenSheet
      closeTrigger={
        <Button asChild className="w-full">
          <Link href={"/koszyk"}>Przejdź do koszyka</Link>
        </Button>
      }
      openTrigger={
        <Button variant={"ghost"} size={"icon"}>
          <ShoppingCart className="w-6 h-6" />
        </Button>
      }
      header="Koszyk"
    >
      {/* CART ITEMS */}
      <div className="flex flex-col gap-6 max-h-full">
        {cart.length === 0 ? (
          <p>Koszyk jest pusty</p>
        ) : (
          <div className="overflow-y-scroll">
            {cart.map((item) => (
              <CartItemCard
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </OpenSheet>
  )
}

function CartItemCard({
  name,
  price,
  quantity,
  image,
}: {
  name: string
  price: number
  quantity: number
  image: string
}) {
  return (
    <div className="flex justify-between border">
      <div>
        <Image src={image} alt="Zdjęcie produktu" height={256} width={256} />
      </div>
      <div>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <div>
        <p>{quantity}</p>
      </div>
    </div>
  )
}

export default CartButton
