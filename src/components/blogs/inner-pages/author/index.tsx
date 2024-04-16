import Breadcrumbs from "@/components/common/Breadcrumbs"
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderOne from "@/layouts/headers/HeaderOne"
import AuthorArea from "./AuthorArea"

const Author = () => {
   return (
      <>
         <HeaderOne />
         <main>
            {/* <Breadcrumbs page="Author Page" style={false} /> */}
            <AuthorArea />
         </main>
         <FooterTwo/>
      </>
   )
}

export default Author
