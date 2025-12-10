import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
const navigate = useNavigate();
  return (
    <div className="mt-10 mb-5">
      <h2 className="text-3xl font-bold text-center mb-5">{title}</h2>
      <button 
      onClick={() => navigate("/cart")}
      className="bg-pink-500 text-white px-4 py-2 rounded-lg ml-10 mb-5 hover:bg-pink-700 transition">Go to Cart</button>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
