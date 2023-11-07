import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./components/Search/Search";
import RecentProperties from "./components/RecentProperties/RecentProperties";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperites";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
      <RecentProperties />
      <FeaturedProperties />
    </>
  );
};

export default App;
