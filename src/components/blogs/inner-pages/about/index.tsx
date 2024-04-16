import Breadcrumbs from "@/components/common/Breadcrumbs"
import FooterNews from "@/components/common/FooterNews"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderOne from "@/layouts/headers/HeaderOne"
import AboutArea from "./AboutArea"
import Team from "./Team"

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        {/* <Breadcrumbs page="About Us" style={false} /> */}
        <AboutArea />
        <Team />
        <FooterNews />
      </main>
      <FooterTwo  />
    </>
  )
}

export default About
