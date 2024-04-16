"use client"
import home_6_data from "@/data/HomeSixData";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import AdBannerThree from "./AdBannerThree";
import SportArea from "./SportArea";
import TopNewsSidebar from "./TopNewsSidebar";

import thumb_1 from "@/assets/img/blog/top_news_post01.jpg"

const TopNews = () => {

   const [isVideoOpen, setIsVideoOpen] = useState(false);

   return (
      <>
         <section className="top-news-post-area pt-70 pb-70">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-9">
                     <div className="row">
                        <div className="col-lg-12">
                           <div className="section-title-wrap mb-30">
                              <div className="section-title section-title-four">
                                 <h2 className="title">World Top News</h2>
                              </div>
                              <div className="section-title-line"></div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
               
                        {home_6_data.filter((items) => items.page === "top_news").map((item) => (
                           <div key={item.id} className="col-lg-4">
                              <div className="horizontal-post-four">
                                 <div className="horizontal-post-thumb-four">
                                    <Link href="/blog-details"><Image src={item.thumb} alt="" /></Link>
                                 </div>
                                 <div className="horizontal-post-content-four">
                                    <Link href="blog" className="post-tag-four">{item.tag}</Link>
                                    <h4 className="post-title"><Link href="/blog-details">{item.title}</Link></h4>
                                    <div className="blog-post-meta">
                                       <ul className="list-wrap">
                                          <li><i className="flaticon-calendar"></i>{item.date}</li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                     {/* <AdBannerThree /> */}
                     {/* <SportArea /> */}
                  </div>
                  {/* <TopNewsSidebar /> */}
               </div>
            </div>
         </section>
         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"Ml4XCF-JS0k"}
         />
         {/* video modal end */}
      </>
   )
}

export default TopNews
