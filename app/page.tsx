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
        padding="px-4 lg:px-8"
      />
      <ProductsSection
        header="جديد علي ترينت"
        allProductUrl="/"
        products={products.slice(4, 8)}
        padding="px-4 lg:px-8"
      
      />
      <ProductsSection
        header="الاكثر مشاهدة"
        allProductUrl="/"
        products={products.slice(8, 12)}
        padding="px-4 lg:px-8"
      />
      <ProductsSection
        header="اضيف مؤخراً"
        allProductUrl="/"
        products={products.slice(12, 16)}
        padding="px-4 lg:px-8"
      />
    </div>
  );
};

export default Home;
