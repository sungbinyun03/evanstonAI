import BlogDetails from "@/components/blogs/blog-details";
import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import inner_blog_data from "@/data/InnerBlogData";
import Wrapper from "@/layouts/Wrapper";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderOne from "@/layouts/headers/HeaderOne";

export const metadata = {
   title: "Blog Details Zaira - News Magazine React Next Js Template",
};
const index = ({ params }: { params: { id: number } }) => {

   const blogs = inner_blog_data.filter(items => items.page === "blog_1");
   const single_blog = blogs.find((item) => Number(item.id) === Number(params.id));
   return (
      <Wrapper>
         <>
            <HeaderOne />
            <main className="fix">
               {/* <Breadcrumbs page="blogs" style={true} /> */}
               <BlogDetailsArea style={false} single_blog={single_blog} key={single_blog?.id} />
            </main>
            <FooterTwo />
         </>
      </Wrapper>
   )
}

export default index