"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";

type Slide = {
  id: number;
  image: string;
  title: string;
};

const slides: Slide[] = [
  { id: 1, image: "/images/hero-img-1.jpg", title: "عروض الأسبوع" },
  { id: 2, image: "/images/hero-img-2.jpg", title: "وصل حديثاً" },
  { id: 3, image: "/images/hero-img-3.jpg", title: "توصيل مجاني" },
];

export default function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const [autoplay] = React.useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="flex mx-4 md:mx:10 lg:mx-24 mt-10">
      <div className="relative w-full mx-auto overflow-hidden rounded-[24px]">
        <Carousel
          setApi={setApi}
          plugins={[autoplay]}
          opts={{ loop: true, align: "start" }}
          className="w-full"
          dir="ltr"
        >
          <CarouselContent className="ml-0">
            {slides.map((slide) => (
              <CarouselItem key={slide.id} className="pl-0 basis-full">
                <div className="relative w-full aspect-16/6 md:aspect-16/5 overflow-hidden">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    //   priority={slide.id === 1}
                    loading="eager"
                    sizes="100vw"
                    className="object-cover"
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                current === i
                  ? "w-8 bg-[#1d9ba1]"
                  : "w-2 bg-[#1d9ba140] hover:bg-[#b9eff290]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
