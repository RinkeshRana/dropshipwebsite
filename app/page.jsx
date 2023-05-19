import Features from "./components/Features";
import Hurry from "./components/Hurry";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h2 className="text-2xl md:text-4xl text-center m-10 underline underline-offset-8 ">
        Featured Products
      </h2>
      <div className="flex space-x-5 flex-wrap justify-center space-y-10">
        <Product
          image="/81fPKd-2AYL._AC_SL1500_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/71li-ujtlUL._AC_UX679_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/61IBBVJvSDL._AC_SY879_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/81fPKd-2AYL._AC_SL1500_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/71li-ujtlUL._AC_UX679_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/61IBBVJvSDL._AC_SY879_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/81fPKd-2AYL._AC_SL1500_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/71li-ujtlUL._AC_UX679_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/61IBBVJvSDL._AC_SY879_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/81fPKd-2AYL._AC_SL1500_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/71li-ujtlUL._AC_UX679_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
        <Product
          image="/61IBBVJvSDL._AC_SY879_.jpg"
          productName="Product name"
          productPrice="$19.99"
          productDiscount="-20%"
        />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Hurry />
      </div>
    </div>
  );
}
