import Hurry from "./components/Hurry";
import Product from "./components/Product";
import PromoSection from "./components/PromoSection";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <div>
      <PromoSection />
      <h2 className="text-2xl md:text-4xl text-center m-10 underline underline-offset-8 ">
        Featured Products
      </h2>
      {/* div with grids with all products in center */}
      {/* <div className="flex justify-center mx-12"> */}
      <div className="flex flex-wrap justify-center ">
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/2.webp"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
      </div>
      {/* </div> */}

      {/* <div>
        <Hurry />
      </div> */}
      <div className="m-12" />
      <Testimonial />
    </div>
  );
}
