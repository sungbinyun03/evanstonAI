import FooterTwo from "@/layouts/footers/FooterTwo"
import CoinArea from "./CoinArea"
import Banner from "./Banner"
import AdBanner from "./AdBanner"
import RecentPost from "./RecentPost"
import TrendingPost from "./TrendingPost"
import AdBannerTwo from "./AdBannerTwo"
import MiningStore from "./MiningStore"
import Newsletter from "./Newsletter"
import HeaderOne from "@/layouts/headers/HeaderOne"

const HomeFive = () => {
  return (
    <>
      <HeaderOne />
      <main className="fix">
         {/* <CoinArea /> */}
         <Banner />
         {/* <AdBanner /> */}
         {/* <RecentPost /> */}
         <TrendingPost />
         {/* <AdBannerTwo /> */}
         {/* <MiningStore /> */}
         <Newsletter />
      </main>
      <FooterTwo />
    </>
  )
}

export default HomeFive
