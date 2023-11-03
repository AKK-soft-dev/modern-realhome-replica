import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Search />
    </>
  );
};

export default App;
