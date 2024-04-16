interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
      mega_dropdown: boolean;
      mega_menus?: {
         link: string;
         title: string;
      }[];
   }[];
}[];

const menu_data: MenuItem[] = [
   {
      id: 1,
      has_dropdown: false,
      title: "Home",
      link: "/",
      // sub_menus: [
      //    { link: "/", title: "Home 01 - Default", mega_dropdown: false, },
      //    { link: "/home-two", title: "Home 02 - Gaming", mega_dropdown: false,  },
      //    { link: "/home-three", title: "Home 03 - Technology", mega_dropdown: false,  },
      //    { link: "/home-four", title: "Home 04 - Travel", mega_dropdown: false,  },
      //    { link: "/home-five", title: "Home 05 - Crypto", mega_dropdown: false,  },
      //    { link: "/home-six", title: "Home 06 - Newspaper", mega_dropdown: false, },
      // ],
   },
   {
      id: 2,
      has_dropdown: false,
      title: "Politics",
      link: "/home-six"
   },
   {
      id: 3,
      has_dropdown: false,
      title: "Arts & Culture",
      link: "/home-two"
   },
   {
      id: 4,
      has_dropdown: false,
      title: "Education",
      link: "/home-three"
   },
   {
      id: 5,
      has_dropdown: false,
      title: "Sports",
      link: "/home-four"
   },
   {
      id: 6,
      has_dropdown: false,
      title: "Business",
      link: "/home-five"
   },
   {
      id: 7,
      has_dropdown: false,
      title: "About Us",
      link: "/about",
   },
   
   {
      id: 8,
      has_dropdown: false,
      title: "Blog",
      link: "/blog",
      // sub_menus: [
      //    { link: "/blog", title: "Blog Default", mega_dropdown: false,  },
      //    { link: "/blog-2", title: "Blog Layout 02", mega_dropdown: false,  },
      //    { link: "/blog-3", title: "Blog Layout 03", mega_dropdown: false,  },
      // ],
   },
   {
      id: 9,
      has_dropdown: false,
      title: "Contact",
      link: "/contact",
   },
];
export default menu_data;
