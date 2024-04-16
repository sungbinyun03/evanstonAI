import FooterTwo from "@/layouts/footers/FooterTwo"
import Banner from "./Banner"
import AdBanner from "./AdBanner"
import EditorPost from "./EditorPost"
import TrandingPost from "./TrandingPost"
import AdBannerThree from "./AdBannerThree"
import OverlayPost from "./OverlayPost"
import WeeklyPost from "./WeeklyPost"
import Newsletter from "./Newsletter"
import HeaderOne from "@/layouts/headers/HeaderOne"

const HomeThree = () => {
   return (
      <>
         <HeaderOne />
         <main className="fix">
            <Banner />
            {/* <AdBanner /> */}
            <EditorPost />
            <TrandingPost />
            {/* <AdBannerThree /> */}
            <OverlayPost />
            <WeeklyPost />
            <Newsletter />
         </main>
         <FooterTwo  />
      </>
   )
}

export default HomeThree
