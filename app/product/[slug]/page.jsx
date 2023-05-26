"use client";

import React, { useState } from "react";
import ProductDetails from "./components/ProductDetails";

const page = () => {
  const [productCount, setProductCount] = useState(1);

  const product = {
    title: "Streetstyle Tees",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.",
    price: 19.99,
    discount: 35.99,
    discountPercent: 44,
    rating: 4.53,
    reviews: 0,
    color: "Young Drake",
    styles: [
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1_100x.png?v=1683259693",
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1_100x.png?v=1683259693",
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/files/Untitled_800x800px_2000x2000px_1_100x.png?v=1683259693",
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/products/Sc38f657dc8424971b88d45e89ba397ceG.jpg?v=1680094679",
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/products/Sfd85103919294ea49f0d7fc02359bf43S.jpg?v=1680094680",
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/products/2316126763416.jpg?v=1677586934",
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/products/Sc38f657dc8424971b88d45e89ba397ceG.jpg?v=1680094679",
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/products/Sfd85103919294ea49f0d7fc02359bf43S.jpg?v=1680094680",
      "https://cdn.shopify.com/s/files/1/0681/1146/6781/products/2316126763416.jpg?v=1677586934",
    ],

    options: [
      {
        name: "Size",
        values: [
          {
            name: "S",
            subvalues: ["Red", "White"],
          },
          {
            name: "M",
            subvalues: ["Red", "White", "Black", "Blue"],
          },
          {
            name: "L",
            subvalues: ["Red", "White", "Black", "Blue", "Green"],
          },
          {
            name: "XL",
            subvalues: ["Red", "White", "Black", "Blue", "Green", "Yellow"],
          },
        ],
      },
      {
        name: "Material",
        values: ["Cotton", "Polyester", "Silk"],
      },
    ],
  };

  return <ProductDetails product={product} />;
};

export default page;
