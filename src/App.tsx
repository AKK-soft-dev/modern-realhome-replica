import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./components/Search/Search";
import RecentProperties from "./components/RecentProperties/RecentProperties";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperites";
import ForSaleProperties from "./components/ForSaleProperties/ForSaleProperties";
import ForRentProperties from "./components/ForRentProperties/ForRentProperites";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <RecentProperties />
      <FeaturedProperties />
      <ForSaleProperties />
      <ForRentProperties />
    </>
  );
};

export default App;
