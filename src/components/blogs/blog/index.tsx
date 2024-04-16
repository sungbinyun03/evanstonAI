import Breadcrumbs from "@/components/common/Breadcrumbs"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"
import FooterNews from "@/components/common/FooterNews"

const Blog = () => {
  return (
    <>
      <HeaderOne />
      <main className="fix">
         {/* <Breadcrumbs page="blogs" style={false} /> */}
         <BlogArea style={false} />
         <FooterNews />
      </main>
      <FooterTwo />
    </>
  )
}

export default Blog
