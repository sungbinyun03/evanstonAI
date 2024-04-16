import Breadcrumbs from "@/components/common/Breadcrumbs"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderOne from "@/layouts/headers/HeaderOne"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <HeaderOne />
         <main className="fix">
            {/* <Breadcrumbs page="blogs" style={true} /> */}
            <BlogDetailsArea style={false} />
         </main>
         <FooterTwo />
      </>
   )
}

export default BlogDetails
