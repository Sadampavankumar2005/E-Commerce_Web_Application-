import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../rtk-store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAdded(product.id);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-gray-900">
      {/* Link wraps the product image/title */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-contain"
        />
        <h2 className="text-xl text-white font-semibold mt-2">{product.title}</h2>
      </Link>

      <p className="text-white">{product.info}</p>
      <p className="font-bold text-white">₹{product.finalPrice}</p>
      <p className="line-through text-white text-sm">₹{product.originalPrice}</p>
khhiu
      {/* Rating */}
      <div className="flex items-center gap-1 mt-2">
        {Array.from({ length: Math.round(product.rateCount || 0) }).map((_, i) => (
          <FaStar key={i} style={{ color: "red" }} />
        ))}
        <span className="text-sm text-gray-400">({product.rateCount})</span>
      </div>   {/* Add to Cart button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleAddToCart(product);
        }}
        className={`mt-6 px-6 py-2 rounded-lg transition-colors ${
          added === product.id
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-red-500 text-white hover:bg-red-600"
        }`}
      >
        {added === product.id ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;