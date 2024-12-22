import Carousel from "@/components/Carousel";
import Carousel2 from "@/components/Carousel2";
import Featured from "@/components/Featured";
import Fluid from "@/components/Fluid";
import Footer from "@/components/Footer";
import NavbarDark from "@/components/NavbarDark";
import NavbarLight from "@/components/NavbarLight";
import ProductCards from "@/components/ProductCards";
import ShopCards from "@/components/ShopCards";

export default function Home() {
  return (
    <>
      <NavbarDark />
      <NavbarLight />
      <Carousel />
      <ShopCards />
      <ProductCards />
      <Carousel2 />
      <Fluid />
      <Featured />
      <Footer />
    </>
  );
}
