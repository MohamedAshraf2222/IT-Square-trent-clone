import { Heart, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  const product = {
    id: "p1",
    name: "طقم كاسات كريستال RCR Timeless — إيطالي الصنع",
    nameEn: "RCR Timeless Crystal Glass Set — Made in Italy",
    slug: "rcr-timeless-crystal-glass-set",
    category: "home",
    price: 210,
    oldPrice: 280,
    discount: 25,
    rating: 4.7,
    reviews: 132,
    location: "الرياض",
    image: "/images/p1.jpg",
    images: ["/images/products/p1.jpg", "/images/products/p1-2.jpg"],
    badge: "sale",
    inStock: true,
    description:
      "طقم كاسات كريستال فاخر من RCR الإيطالية، مثالي للمناسبات والحفلات.",
  };
  return (
    <section className="my-20 px-4 lg:px-8">
      <div className="flex flex-col items-center max-w-75 justify-center mt-2.5">
        <div className="relative w-full h-75 overflow-hidden rounded-t-2xl">
          <Image
            src={product.image}
            className="object-cover rounded-t-2xl"
            alt={product.name}
            width={300}
            height={300}
          />
          <div className="absolute top-2.5 left-2.5 bg-[#1d9ba1] text-white text-[12px] font-bold px-2 py-1 rounded-full">
            {product.badge}
          </div>
          <div className="absolute top-2.5 right-2.5 bg-background text-[#94A3B8] hover:text-[#1d9ba1] cursor-pointer font-bold p-2 rounded-full">
            <Heart className="w-4 h-4" />
          </div>
        </div>
        <Link href={`${product.slug}`} className="w-full">
          <div className="bg-background rounded-b-2xl px-4 py-3.5 shadow-[0_8px_16px_#0000000a]">
            <div className="text-[12px] bg-[#0FA4A910] w-fit rounded-xl px-2.5 py-0.5 font-semibold text-[#0FA4A9] mb-3.5 leading-3.5">
              {product.category}
            </div>
            <h3 className="text-[12px] font-extrabold text-[#0F172A]">
              {product.name}
            </h3>
            <div className="flex items-center justify-between mt-3.5">
              <div className="flex items-center gap-1 text-[12px] font-normal text-[#94A3B8]">
                <Star className="w-4 h-4 text-[#FACC15] inline-block mr-1" />
                {product.rating} ({product.reviews} تقييم)
              </div>
              <div className=" flex items-center gap-1">
                <MapPin className="w-4 h-4 text-[#94A3B8] inline-block mr-1" />
                <span className="text-[12px] font-normal text-[#94A3B8]">
                  {product.location}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2.5 border-t border-[#E2E8F0] pt-2.5">
              <div className="flex items-center gap-1">
                <span className="text-[18px] font-black text-[#0F172A]">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice > product.price && (
                  <span className="text-[12px] font-normal text-[#94A3B8] line-through">
                    ${product.oldPrice.toFixed(2)}
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
