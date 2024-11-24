import HeroBanner from "@/components/HeroBanner/HeroBanner";
import LessThanProducts from "@/components/LessThan100/LessThanProducts";
import Offers from "@/components/Offers/Offers";
import TopCategories from "@/components/TopCategories/TopCategories";
import SkinCare from "@/components/SkinCare/SkinCare";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import ChicoCompany from "@/components/ChicoCompany/ChicoCompany";
import ProductsBestSeller from "@/components/ProductsBestSeller/ProductsBestSeller";
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Offers />
      <TopCategories />
      <LessThanProducts />
      <SkinCare />
      <FeaturedProducts />
      <ChicoCompany />
      <ProductsBestSeller />
    </main>
  );
}
