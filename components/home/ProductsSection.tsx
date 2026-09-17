import { Product } from "@/types/home/types";
import Link from "next/link";
import Card from "./Card";

interface productSectionProps {
  header: string;
  allProductUrl: string;
  products: Product[];
}

const ProductsSection = ({
  header,
  allProductUrl,
  products,
}: productSectionProps) => {
  return (
    <section className="my-20 px-4 lg:px-8 flex flex-col items-center">
      <div className="flex items-center justify-between w-full mb-6">
        <h2 className="text-base text-dark font-black">{header}</h2>
        <Link
          href={allProductUrl}
          className="flex justify-center items-center cursor-pointer text-sm font-black text-[#1d9ba1] hover:text-[#17878c] hover:border-[#17878c] bg-background border border-[#1d9ba1] rounded-2xl px-2.5 py-0.75"
        >
          عرض الكل
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.length > 0 &&
          products
            .slice(0, 4)
            .map((product) => <Card key={product.id} product={product} />)}
      </div>
    </section>
  );
};

export default ProductsSection;
