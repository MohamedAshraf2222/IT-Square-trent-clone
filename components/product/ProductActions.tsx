"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, Zap } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { Product } from "@/types/home/types";

interface ProductActionsProps {
  product: Product;
  maxQty?: number;
}

const ProductActions = ({ product, maxQty = 5 }: ProductActionsProps) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col gap-3 pt-2">
      {/* Quantity control */}
      <div className="flex items-center gap-4">
        <span className="text-xs font-bold text-gray-700">الكمية:</span>
        <div className="inline-flex items-center border border-gray-200 rounded-xl bg-white p-1">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="تقليل الكمية"
          >
            <Minus className="w-4 h-4" />
          </button>
          <input
            type="text"
            value={qty}
            readOnly
            className="w-12 text-center text-sm font-bold text-gray-900 border-none bg-transparent p-0 focus:ring-0"
          />
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="زيادة الكمية"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <span className="text-xs text-gray-400">
          الحد الأقصى لكل طلب {maxQty} قطع
        </span>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
        <button
          type="button"
          onClick={handleAdd}
          className="sm:col-span-7 bg-[#00897b] hover:bg-[#00796b] text-white py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,137,123,0.3)] transition-all cursor-pointer hover:shadow-lg"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>أضف إلى السلة</span>
        </button>
        <button
          type="button"
          className="sm:col-span-5 bg-teal-50 hover:bg-teal-100/80 text-[#00685e] border border-[#00685e]/20 py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <Zap className="w-4 h-4" />
          <span>شراء فوري</span>
        </button>
      </div>
    </div>
  );
};

export default ProductActions;