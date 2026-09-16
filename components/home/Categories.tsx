import { categories } from "@/lib/dummy-data";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="flex flex-col px-4 md:px-12 justify-center gap-4 mt-2.5">
      <h2 className="text-base text-dark font-black">الأقسام</h2>
      <div
        className="flex  items-center gap-3 scroll-smooth
        overflow-x-auto
          snap-x snap-mandatory
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          md:justify-center"
      >
        {categories.map((category) => (
          <Link
            key={category.id}
            href={category.slug}
            className="
            shrink-0 snap-start
            mt-4
            flex flex-col items-center justify-center gap-2.5
            min-w-25 p-[10px_8px]
            w-fit
            border border-nav-border
            rounded-[18px]
            bg-white
            text-[14px] font-extrabold text-dark
            shadow-[0_4px_10px_#00000008]
          "
          >
            <div className=" flex items-center justify-center p-0.75 rounded-full border border-[#1d9ba129] ">
              <Image
                src={category.image || "/images/category-electronics.png"}
                className="rounded-full"
                alt={category.name}
                width={60}
                height={60}
              />
            </div>
            <p className="">{category.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
