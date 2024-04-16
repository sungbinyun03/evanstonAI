import HeaderOne from "@/layouts/headers/HeaderOne"
import Feature from "./Feature"
import Newsletter from "./Newsletter"
import LatestPost from "./LatestPost"
import Category from "./Category"
import Recipe from "./Recipe"
import AdBanner from "./AdBanner"
import Healthy from "./Healthy"
import AdBannerTwo from "./AdBannerTwo"
import FooterTwo from "@/layouts/footers/FooterTwo"

const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <main className="fix">
            <Feature />
            <Newsletter />
            {/* <LatestPost /> */}
            {/* <Category /> */}
            <Recipe />
            {/* <AdBanner /> */}
            {/* <Healthy /> */}
            {/* <AdBannerTwo /> */}
         </main>
         <FooterTwo />
      </>
   )
}

export default HomeOne
