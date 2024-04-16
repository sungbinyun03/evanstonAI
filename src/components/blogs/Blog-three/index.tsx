import Breadcrumbs from "@/components/common/Breadcrumbs"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogArea from "./BlogArea"
import FooterNews from "@/components/common/FooterNews"

const BlogThree = () => {
   return (
      <>
         <HeaderOne />
         <main className="fix">
            {/* <Breadcrumbs page="Blogs" style={false} /> */}
            <BlogArea />
            <FooterNews />
         </main>
         <FooterTwo />
      </>
   )
}

export default BlogThree
