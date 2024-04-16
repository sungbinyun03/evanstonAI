import FooterTwo from "@/layouts/footers/FooterTwo"
import Banner from "./Banner";
import Category from "./Category";
import Spotlight from "./Spotlight";
import VideoPost from "./VideoPost";
import WeeklyPost from "./WeeklyPost";
import HeaderOne from "@/layouts/headers/HeaderOne";
import AdBannerTwo from "./AdBannerTwo";
import AdBannerOne from "./AdBannerOne";
import Newsletter from "./Newsletter";

const HomeTwo = () => {
  return (
    <>
      <HeaderOne />
      <main className="fix">
        {/* <Banner /> */}
        {/* <Category /> */}
        {/* <AdBannerOne /> */}
        <Spotlight />
        {/* <AdBannerTwo /> */}
        {/* <VideoPost /> */}
        <WeeklyPost />
        <Newsletter />
      </main>
      <FooterTwo/>
    </>
  )
}

export default HomeTwo;
