"use client";
import { Product } from "@/types/home/types";
import { Heart, MapPin, Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface CardProps {
  product: Product;
}
const Card = ({ product }: CardProps) => {
  return (
    <section className="my-5 px-4 lg:px-8">
      <div className="group flex flex-col items-center max-w-75 justify-center mt-2.5 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.18)]">
        <div className="relative w-full h-75 overflow-hidden rounded-t-2xl">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover object-center h-full rounded-t-2xl transition-transform duration-500 ease-out group-hover:scale-110"
          />
          {product.badge && (
            <div className="absolute top-2.5 left-2.5 bg-[#1d9ba1] text-white text-[12px] font-bold px-2 py-1 rounded-full z-20">
              {product.badge}
            </div>
          )}

          <div className="absolute top-2.5 right-2.5 bg-background text-[#94A3B8] hover:text-[#1d9ba1] cursor-pointer font-bold p-2 rounded-full z-20 transition-colors">
            <Heart className="w-4 h-4" />
          </div>

          <button
            type="button"
            className="absolute w-[80%] mx-auto rounded-2xl bottom-2.5 lg:-bottom-1 left-0 right-0 z-10 flex items-center justify-center gap-2 bg-[#1d9ba1] hover:bg-[#17878c] cursor-pointer text-white text-[13px] font-bold py-3 lg:translate-y-full lg:group-hover:-translate-y-3 transition-transform duration-300 ease-out"
          >
            <ShoppingCart className="w-4 h-4" />
            أضف إلى السلة
          </button>
        </div>

        <Link href={`/${product.slug}`} className="w-full">
          <div className="bg-background rounded-b-2xl px-4 py-3.5 shadow-[0_8px_16px_#0000000a]">
            <div className="text-[12px] bg-[#0FA4A910] w-fit rounded-xl px-2.5 py-0.5 font-semibold text-[#0FA4A9] mb-3.5 leading-3.5">
              {product.category}
            </div>

            <h3 className="text-[12px] font-extrabold text-[#0F172A]">
              {product.name.length < 20
                ? product.name
                : `${product.name.substring(0, 20)}...`}
            </h3>

            <div className="flex items-center justify-between mt-3.5">
              <div className="flex items-center gap-1 text-[12px] font-normal text-[#94A3B8]">
                <Star className="w-4 h-4 text-[#FACC15] inline-block mr-1" />
                {product.rating} ({product.reviews} تقييم)
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#94A3B8] inline-block mr-1" />
                <span className="text-[12px] font-normal text-[#94A3B8]">
                  {product.location}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2.5 border-t border-[#E2E8F0] pt-2.5">
              <div className="flex items-center gap-1">
                <span className="text-[18px] font-black text-[#0F172A]">
                  {product.price.toFixed(2)}
                </span>
                {product.oldPrice && product.oldPrice > product.price && (
                  <span className="text-[12px] font-normal text-[#94A3B8] line-through">
                    {product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-[14px] font-black text-[#1d9ba1]">
                  ر.س
                </span>
              </div>
              {product.inStock && (
                <div className="text-[12px] bg-[#05966910] w-fit rounded-xl px-2.5 py-0.5 font-semibold text-[#059669] mb-2.5 leading-3.5">
                  متوفر فوري
                </div>
              )}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Card;
