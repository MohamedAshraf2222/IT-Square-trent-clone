import HeroCarousel from "@/components/home/HeroCarousel";
import Categories from "@/components/home/Categories";
import ProductsSection from "@/components/home/ProductsSection";
import { products } from "@/lib/dummy-data";

const Home = () => {
  return (
    <div className="text-primary">
      <HeroCarousel />
      <Categories />
      <ProductsSection
        header="الاكثر طلباً"
        allProductUrl="/"
        products={products}
      />
      <ProductsSection
        header="جديد علي ترينت"
        allProductUrl="/"
        products={products.slice(4, 8)}
      />
      <ProductsSection
        header="الاكثر مشاهدة"
        allProductUrl="/"
        products={products.slice(8, 12)}
      />
      <ProductsSection
        header="اضيف مؤخراً"
        allProductUrl="/"
        products={products.slice(12, 16)}
      />
    </div>
  );
};

export default Home;
