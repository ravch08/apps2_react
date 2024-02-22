export const recursiveMenuData = [
  {
    id: "hm",
    label: "Home",
    to: "/",
  },
  {
    id: "au",
    label: "About Us",
    to: "/about",
  },
  {
    id: "pr",
    label: "Products",
    to: "/products",
    children: [
      {
        id: "pr1",
        label: "Shoes",
        to: "/products/shoes",
        children: [
          {
            id: "pr11",
            label: "Running Shoes",
            to: "/products/shoes/running",
          },
          {
            id: "pr12",
            label: "Formal Shoes",
            to: "/products/shoes/formal",
          },
        ],
      },
      { id: "pr2", label: "Bags", to: "/products/bags" },
      { id: "pr3", label: "Watches", to: "/products/watches" },
    ],
  },
  {
    id: "bg",
    label: "Blogs",
    to: "/blogs",
    children: [
      { id: "bg1", label: "Blog 1", to: "/blogs/1" },
      { id: "bg2", label: "Blog 2", to: "/blogs/2" },
      { id: "bg3", label: "Blog 3", to: "/blogs/3" },
    ],
  },
  {
    id: "ct",
    label: "Contact",
    to: "/contact",
  },
];
