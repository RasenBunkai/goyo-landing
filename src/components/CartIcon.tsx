import React from "react";
import {ShoppingCart} from "lucide-react";
import {useCart} from "../context/CartContext";

const CartIcon = () => {
  const {getTotalItems} = useCart();
  const totalItems = getTotalItems();

  return (
    <a
      href="/carrito"
      className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors duration-300">
      <ShoppingCart className="w-6 h-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </a>
  );
};

export default CartIcon;
