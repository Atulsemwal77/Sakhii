import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();
  return (
    <div className="border p-4 rounded-lg shadow-sm text-center bg-pink-500 hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-cover mx-auto"
      />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-pink-700 font-bold">₹{product.price}</p>
      <button 
      
       onClick={ () => {
        addToCart(product);
        toast.success('Successfully added to cart!')
       }}
       className="mt-2 px-4 py-2 bg-white text-black rounded hover:bg-gray-300 transition mr-10">Add to Cart</button>
      <button className="mt-2 px-4 py-2 bg-green-600 text-gray-700 rounded hover:bg-green-400 transition">Buy Now</button>
    </div>
  );
};

export default ProductCard;
