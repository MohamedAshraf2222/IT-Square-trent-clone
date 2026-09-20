"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[] | undefined;
  name: string;
  discount?: number;
}

const ProductGallery = ({ images, name, discount }: ProductGalleryProps) => {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-[#F1F5F9] rounded-2xl" />
    );
  }


  return (
    <div className="flex flex-col gap-4 w-full lg:pr-5">
      <div className="relative w-full h-100 aspect-square overflow-hidden rounded-2xl bg-[#F8FAFC]">
        <Image
          src={images[active]}
          alt={name}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-opacity duration-300 ease-out"
        />

             {discount && (
                <div className="absolute top-2.5 right-2.5 flex gap-1 bg-[#ef4444] text-white text-[12px] font-bold px-2 py-1 rounded-full z-20">
                  <span>تخفيض</span>
                  {discount}%
                </div>
              )}
              <div className="absolute top-10 right-2.5 bg-background text-[#00685e] text-[10px] font-bold px-2.5 py-1 rounded-full z-20">
                منتج اصلي 100%
              </div>

              <div className="absolute top-2.5 left-2.5 bg-background text-[#94A3B8] hover:text-[#1d9ba1] cursor-pointer font-bold p-2 rounded-full z-20 transition-colors">
                <Heart className="w-4 h-4" />
              </div>

        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[12px] font-medium px-2.5 py-1 rounded-full">
          {active + 1} / {images.length}
        </div>
            </div>
      {images.length > 1 && (
        <div className="flex gap-4" >
          {images.slice(0,5).map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`relative aspect-square cursor-pointer overflow-hidden rounded-xl w-17.5! transition-all duration-200 ${
                i === active
                  ? "ring-2 ring-[#1d9ba1] ring-offset-2"
                  : "ring-1 ring-[#E2E8F0] hover:ring-[#1d9ba1]/60 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${name} — صورة ${i + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;