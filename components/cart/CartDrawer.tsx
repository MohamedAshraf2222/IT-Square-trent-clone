"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2 } from "lucide-react";

import {
  closeCart,
  incrementQty,
  decrementQty,
  removeFromCart,
} from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

const CartDrawer = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((s:RootState) => s.cart);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => dispatch(closeCart())}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-full max-w-sm bg-white shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between p-4 border-b border-[#E2E8F0]">
          <h2 className="font-black text-[#0F172A]">سلة التسوق</h2>
          <button onClick={() => dispatch(closeCart())} aria-label="إغلاق">
            <X className="w-5 h-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <p className="p-6 text-center text-sm text-[#94A3B8]">السلة فارغة</p>
        ) : (
          <ul className="divide-y divide-[#E2E8F0] overflow-y-auto max-h-[70vh]">
            {items.map((item) => (
              <li key={item.id} className="flex gap-3 p-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#F8FAFC] shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/products/${item.slug}`}
                    onClick={() => dispatch(closeCart())}
                    className="text-[13px] font-bold text-[#0F172A] line-clamp-2"
                  >
                    {item.name}
                  </Link>
                  <p className="text-[13px] font-black text-[#1d9ba1] mt-1">
                    {item.price} ر.س
                  </p>

                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch(decrementQty(item.id))}
                      className="p-1 rounded-md border border-[#E2E8F0]"
                      aria-label="تقليل الكمية"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-[13px] w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(incrementQty(item.id))}
                      className="p-1 rounded-md border border-[#E2E8F0]"
                      aria-label="زيادة الكمية"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="ml-auto text-[#94A3B8] hover:text-[#DC2626]"
                      aria-label="حذف"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 && (
          <footer className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#E2E8F0] bg-white">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[#94A3B8]">الإجمالي</span>
              <span className="text-lg font-black text-[#0F172A]">
                {total.toFixed(2)} ر.س
              </span>
            </div>
            <button className="w-full bg-[#1d9ba1] hover:bg-[#17878c] text-white font-bold py-3 rounded-2xl transition-colors">
              إتمام الشراء
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;