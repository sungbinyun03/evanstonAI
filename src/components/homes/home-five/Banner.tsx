import Link from "next/link"
import Image, { StaticImageData } from "next/image";
import home_5_data from   "@/data/HomeFiveData"
import bannerThumb_1 from "@/assets/img/blog/cr_banner_post01.jpg"
import bannerThumb_2 from "@/assets/img/blog/cr_banner_post02.jpg"
import bannerThumb_3 from "@/assets/img/blog/cr_banner_post03.jpg"

interface DataType {
   id: number;
   thumb: StaticImageData;
   tag: string;
   title: JSX.Element;
   date: string;
   time: string;
}[];



const Banner = () => {
   return (
      <section className="banner-post-area-four pb-30">
         <div className="container custom-container">
            <div className="row">
               {home_5_data.slice(0,3).map((item) => (
                  <div key={item.id} className="col-lg-4">
                     <div className="banner-post-four">
                        <div className="banner-post-thumb-four">
                           <Link href="blog-details"><Image src={item.thumb} alt="" /></Link>
                        </div>
                        <div className="banner-post-content-four">
                           <Link href="/blog" className="post-tag">{item.tag}</Link>
                           <h2 className="post-title bold-underline"><Link href="/blog-details">{item.title}</Link></h2>
                           <div className="blog-post-meta white-blog-meta">
                              <ul className="list-wrap">
                                 <li><i className="flaticon-user"></i>by<a href="/author">Admin</a></li>
                                 <li><i className="flaticon-calendar"></i>{item.date}</li>
                                 <li><i className="flaticon-history"></i>{item.time}</li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Banner
