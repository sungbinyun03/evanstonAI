import Breadcrumbs from '@/components/common/Breadcrumbs'
import FooterTwo from "@/layouts/footers/FooterTwo"
import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import BlogArea from '../blog/BlogArea'
import FooterNews from '@/components/common/FooterNews'

const BlogTwo = () => {
   return (
      <>
         <HeaderOne />
         <main className='fix'>
            {/* <Breadcrumbs page="blogs" style={false} /> */}
            <BlogArea style={true} />
            <FooterNews />
         </main>
         <FooterTwo/>
      </>
   )
}

export default BlogTwo
