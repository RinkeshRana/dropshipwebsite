import Navbar from "./components/Navbar";
import Product from "./components/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex space-x-5">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
