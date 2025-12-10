import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, totalPrice, clearCart } = useCart();

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 && <p>No items in cart...</p>}

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-pink-200 border p-3 rounded"
          >
            <div>
              <h3 className="font-bold">{item.name}</h3>
              <p>₹{item.price} × {item.qty}</p>
            </div>

            <p className="font-bold">
              ₹{item.price * item.qty}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-5">
          <h2 className="text-2xl font-bold">
            Total: ₹{totalPrice}
          </h2>

          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded mt-3 hover:bg-red-700"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
