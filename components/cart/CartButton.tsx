"use client";

import { RootState } from "@/store";
import { openCart } from "@/store/cartSlice";
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const CartButton = () => {
  const dispatch = useDispatch();
  const count = useSelector((s:RootState) =>
    s.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  return (
    <button
      onClick={() => dispatch(openCart())}
          className="
          cursor-pointer
          relative
      shrink-0 snap-start lg:snap-none lg:shrink
  flex items-center justify-center gap-2.5
  min-w-23.5 min-h-12
  p-[10px_12px]
  border border-nav-border
  rounded-[18px]
  bg-white
  text-[12px] font-bold text-[#002f36]
  shadow-[0_4px_10px_#00000008]
"
      aria-label="عرض السلة"
    >
      <ShoppingCart className="w-5 h-5" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#DC2626] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
      <p className="text-[12px] font-bold text-[#002f36]">السلة</p>
    </button>
  );
};

export default CartButton;