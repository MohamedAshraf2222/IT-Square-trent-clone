import HeroCarousel from "@/components/home/HeroCarousel";
import Categories from "@/components/home/Categories";
import Card from "@/components/home/Card";

const Home = () => {
  return <div className="text-primary">
    <HeroCarousel />
    <Categories />
    <Card/>
  </div>;
};

export default Home;
