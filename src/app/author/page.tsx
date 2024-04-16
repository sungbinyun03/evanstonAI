import Author from "@/components/blogs/inner-pages/author";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Evanston AI - Local Newsroom",
};
const index = () => {
  return (
    <Wrapper>
      <Author />
    </Wrapper>
  )
}

export default index