import About from "@/components/blogs/inner-pages/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "About Evanston AI - Local Newsroom",
};
const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}

export default index