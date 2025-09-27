"use client"

import { useCartStore } from "../stores/useCartStore"
import Link from "next/link"

const Header = () => {
  const {cartItems} = useCartStore()

  return (
    <div className="flex flex-row items-center justify-between bg-purple-600 text-white w-[100%] max-w-[750px] min-w-[280px] px-5 py-2.5 max-sm:mt-0">
      <Link href="/" className="text-white no-underline hover:text-yellow-400 hover:underline">
        <h1 className="text-2xl font-bold max-sm:text-lg">eCommerceApp</h1>
      </Link>
      <Link href="/product-list" className="text-white no-underline hover:text-yellow-400 hover:underline">
        <h2 className="text-xl font-bold max-sm:text-base">Products</h2>
      </Link>
      <Link href="/cart" className="text-white no-underline hover:text-yellow-400 hover:underline">
        <h2 className="text-xl font-bold max-sm:text-base">Cart {cartItems.length > 0 && cartItems.length}</h2>
      </Link>
    </div>
  )
}

export default Header