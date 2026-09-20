"use client";
import ProductsSection from "@/components/home/ProductsSection";
import ProductGallery from "@/components/product/ProductGallery";
import { products } from "@/lib/dummy-data";
import { Heart, MapPin, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Page() {
  const { product } = useParams();
  const foundProduct = products.find((p) => p.id === product);

  if (!foundProduct) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <section className="py-5 px-3 lg:px-4 bg-[#f8fafd]">
        <div className=" justify-center py-5 grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-2 bg-background w-[90%] min-h-[80vh] mx-auto shadow-[0_8px_16px_#0000000a] rounded-2xl">
          <div className="flex">
            {/* <div className="relative w-full h-100 overflow-hidden rounded-t-2xl">
              <Image
                src={foundProduct.image}
                alt={foundProduct.name}
                width={`1000000`}
                height={3000}
                className="object-cover object-center h-full rounded-2xl w-full transition-transform duration-500 ease-out "
              />
              {foundProduct.discount && (
                <div className="absolute top-2.5 right-2.5 flex gap-1 bg-[#ef4444] text-white text-[12px] font-bold px-2 py-1 rounded-full z-20">
                  <span>تخفيض</span>
                  {foundProduct.discount}%
                </div>
              )}
              <div className="absolute top-10 right-2.5 bg-background text-[#00685e] text-[10px] font-bold px-2.5 py-1 rounded-full z-20">
                منتج اصلي 100%
              </div>

              <div className="absolute top-2.5 left-2.5 bg-background text-[#94A3B8] hover:text-[#1d9ba1] cursor-pointer font-bold p-2 rounded-full z-20 transition-colors">
                <Heart className="w-4 h-4" />
              </div>
            </div> */}

            <ProductGallery images={foundProduct.images}name={foundProduct.name} discount={foundProduct.discount}/>
          </div>
          <div className="flex flex-col self-start px-0 lg:px-8 gap-2">
            <div className="flex items-center justify-between">
              <p className="text-[#00685e] bg-[#f0fdfa] text-[10px] font-bold px-2.5 py-1 rounded-full">
                {foundProduct.categoryName}
              </p>
              {foundProduct.inStock && (
                <div className="flex justify-center items-center gap-1 bg-[#f0fdfa] rounded-full px-2.5 py-1 ">
                  <div className="bg-[#10b981] rounded-full w-2 h-2 animate-pulse"></div>
                  <p className="text-[#00685e]  text-[10px] font-bold ">
                    متوفر في المخزون
                  </p>
                </div>
              )}
            </div>
            <h1 className="text-2xl font-bold text-dark mt-4 mb-2">
              {foundProduct.name}
            </h1>
            <div className="flex items-center justify-between">
              <div className="text-[#94A3B8] text-[12px] w-fit mt-2 flex items-center gap-1 bg-[#fffbeb] rounded-2xl px-2.5 py-1">
                <Star className="w-3 h-3 text-[#FACC15] inline-block mr-1 fill-[#FACC15]" />
                <p className="text-[#78350f] text-[12px] font-bold">
                  {foundProduct.rating}
                  <span className="text-[#78350f] text-[10px] font-medium">
                    {" "}
                    ({foundProduct.reviews} تقييم)
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-1 text-[12px] font-normal text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-[#94A3B8] inline-block mr-1" />
                <span className="text-[12px] font-normal text-[#94A3B8] flex gap-1">
                  {foundProduct.location}
                  <span>(متاح للاستخدام والتوصيل)</span>
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center rounded-2xl mt-4 bg-[#f7fafc] px-5 py-4">
              <div className="text-[30px] text-[#00685e] font-bold flex gap-1 items-end">
                {foundProduct.price.toFixed(2)}
                <span className="text-base">ر.س</span>
                {foundProduct.oldPrice &&
                  foundProduct.oldPrice > foundProduct.price && (
                    <span className="text-[12px] font-normal text-[#94A3B8] line-through">
                      {foundProduct.oldPrice}
                      <span className="">ر.س</span>
                    </span>
                  )}
              </div>
              <div className="flex gap-1 bg-[#fff1f2] text-[#e11d48] text-[12px] px-2 py-1 rounded-full">
                <span>وفر</span>
                {foundProduct.discount}%<span>(خصم خاص)</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-2 border border-gray-100 rounded-lg px-4 py-2.5">
              {foundProduct.description}
            </p>
            <div className="flex items-center mt-4">
              <button className="bg-[#00685e] flex justify-center w-full items-center gap-1.5 cursor-pointer text-white font-bold px-4 py-4 rounded-sm hover:bg-[#1d9ba1] transition-colors">
                <ShoppingCart className="w-4 h-4" />
                أضف الي السلة
              </button>
            </div>
          </div>
        </div>
      <ProductsSection allProductUrl="/" header="منتجات ذات صلة" products={products.slice(0,4)}/>
      </section>
    </>
  );
}
