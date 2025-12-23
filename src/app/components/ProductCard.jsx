// "use client";

// import Link from "next/link";

// export default function ProductCard({ product }) {
//   return (
//     <Link
//       href={`/product/${product._id}`}
//       className="block border rounded p-4 hover:shadow-lg transition"
//     >
//       <img
//         src={product.images?.[0] || "/placeholder.png"}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded mb-3"
//       />
//       <h3 className="text-lg font-semibold">{product.name}</h3>
//       <p className="text-gray-600">
//         ₦{product.price.toLocaleString()}
//         {product.oldPrice && (
//           <span className="line-through text-sm text-gray-400 ml-2">
//             ₦{product.oldPrice.toLocaleString()}
//           </span>
//         )}
//       </p>
//     </Link>
//   );
// }

// "use client";

// import { useCart } from "@/app/context/cartContext";
// // import Image from "next/image";
// import Link from "next/link";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();

//   // Fallback image
//   const img = product.images?.[0] || "/placeholder.png";

//   return (
//     <div className="border rounded-lg p-4 shadow-sm relative group">
//       {/* Product Image */}
//       <Link href={`/product/${product._id}`}>
//         <img
//           src={img}
//           alt={product.name}
//           width={300}
//           height={300}
//           className="w-full h-48 object-cover rounded mb-3"
//         />
//       </Link>

//       {/* PRODUCT INFO */}
//       <div className="mt-3">
//         <h3 className="font-semibold text-lg">{product.name}</h3>
//         <p className="text-gray-600 text-sm">{product.category}</p>

//         <div className="mt-2 font-bold text-xl">
//           ₦{product.price.toLocaleString()}
//         </div>

//         {product.oldPrice && (
//           <div className="text-sm line-through text-gray-400">
//             ₦{product.oldPrice.toLocaleString()}
//           </div>
//         )}
//       </div>

//       {/* ADD TO CART ICON BUTTON */}
//       <button
//         onClick={() =>
//           addToCart({
//             ...product,
//             image: img, // ensure cart always has the main image
//           })
//         }
//         className="
//           absolute top-3 right-3 bg-black text-white
//           p-2 rounded-full opacity-0 group-hover:opacity-100
//           transition duration-200 shadow-md
//         "
//         title="Add to Cart"
//       >
//         <i className="fas fa-cart-plus"></i>
//       </button>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useCart } from "@/app/context/cartContext";
// import { useToast } from "@/app/context/toastContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();
//   const { showToast } = useToast();
  

//   return (
//     <div className="block border rounded p-4 hover:shadow-lg transition relative group">
//       {/* IMAGE + LINK */}
//       <Link href={`/product/${product._id}`}>
//         <img
//           src={product.images?.[0] || "/placeholder.png"}
//           alt={product.name}
//           className="w-full h-48 object-cover rounded mb-3"
//         />
//         <h3 className="text-lg font-semibold">{product.name}</h3>

//         <p className="text-gray-600">
//           ₦{product.price.toLocaleString()}
//           {product.oldPrice && (
//             <span className="line-through text-sm text-gray-400 ml-2">
//               ₦{product.oldPrice.toLocaleString()}
//             </span>
//           )}
//         </p>
//       </Link>

//       {/* ADD TO CART BUTTON */}
//       <button
//         onClick={() => {
//           addToCart({
//             ...product,
//             image: product.images?.[0] || "/placeholder.png",
//           });
//           showToast("Added to cart!");
//         }}
//         className="
//           absolute top-3 right-3 bg-black text-white 
//           p-2 rounded-full opacity-0 group-hover:opacity-100 
//           transition duration-200 shadow-md
//         "
//         title="Add to Cart"
//       >
//         <i className="fas fa-cart-plus"></i>
//       </button>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useCart } from "@/app/context/cartContext";
// import { useToast } from "@/app/context/toastContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();
//   const { showToast } = useToast();

//   return (
//     <div className="block border rounded p-4 hover:shadow-lg transition relative group">
//       {/* IMAGE + LINK */}
//       <Link href={`/product/${product._id}`}>
//         <img
//           src={product.images?.[0] || "/placeholder.png"}
//           alt={product.name}
//           className="w-full h-48 object-cover rounded mb-3"
//         />
//         <h3 className="text-lg font-semibold truncate max-w-[90%]">
//           {product.name}
//         </h3>

//         <p className="text-gray-600">
//           ₦{product.price.toLocaleString()}
//           {product.oldPrice && (
//             <span className="line-through text-sm text-gray-400 ml-2">
//               ₦{product.oldPrice.toLocaleString()}
//             </span>
//           )}
//         </p>
//       </Link>

//       {/* ADD TO CART BUTTON */}
//       <button
//         onClick={() => {
//           const defaultSize =
//             product.sizes?.length > 0 ? product.sizes[0] : null;

//           const defaultColor =
//             product.colors?.length > 0 ? product.colors[0] : null;

//           addToCart(product, 1, {
//             size: defaultSize,
//             color: defaultColor,
//           });

//           showToast("Added to cart!");
//         }}
//         className="
//            absolute top-3 right-3 
//     bg-black text-white 
//     py-1 px-2  rounded-full 
//     shadow-md
//         "
//         title="Add to Cart"
//       >
//         <i className="fas fa-cart-plus"></i>
//       </button>
//     </div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { useCart } from "@/app/context/cartContext";
// import { useToast } from "@/app/context/toastContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();
//   const { showToast } = useToast();

//   return (
//     <div className="relative group p-4">
//       {/* IMAGE + LINK */}
//       <Link
//         href={`/product/${product._id}`}
//         className="block mb-4 overflow-hidden"
//       >
//         <img
//           src={product.images?.[0] || "/placeholder.png"}
//           alt={product.name}
//           className="w-[100%] h-60 lg:h-72 object-cover"
//         />
//       </Link>

//       <Link href={`/product/${product._id}`} className="block">
//         <h3
//           className="text-xl font-semibold text-gray-900 truncate max-w-full mb-1"
//           title={product.name}
//         >
//           {product.name}
//         </h3>

//         <p className="text-sm text-gray-500 mb-2 capitalize">
//           {product.category || "Uncategorized"}
//         </p>

//         <p className="text-lg font-medium text-gray-800">
//           ₦{product.price.toLocaleString()}
//           {product.oldPrice && (
//             <span className="line-through text-sm text-gray-400 ml-3">
//               ₦{product.oldPrice.toLocaleString()}
//             </span>
//           )}
//         </p>
//       </Link>

//       {/* ADD TO CART BUTTON */}
//       <button
//         onClick={() => {
//           const defaultSize =
//             product.sizes?.length > 0 ? product.sizes[0] : null;

//           const defaultColor =
//             product.colors?.length > 0 ? product.colors[0] : null;

//           addToCart(product, 1, {
//             size: defaultSize,
//             color: defaultColor,
//           });

//           showToast("Added to cart!");
//         }}
//         className="
//           absolute top-6 right-6
//           bg-black text-white 
//           w-8 h-8 flex items-center justify-center
//           rounded-full
//           shadow-md
//           transition hover:bg-gray-800
//           text-sm
//         "
//         title="Add to Cart"
//         aria-label={`Add ${product.name} to cart`}
//       >
//         <i className="fas fa-cart-plus"></i>
//       </button>
//     </div>
//   );
// }

// HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE UPPPPPPPPPPPPPPPPPPPP


// "use client";

// import Link from "next/link";
// import { useCart } from "@/app/context/cartContext";
// import { useToast } from "@/app/context/toastContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();
//   const { showToast } = useToast();

//   return (
//     <div className="relative group p-3 sm:p-4">
//       {/* IMAGE */}
//       <Link
//         href={`/product/${product._id}`}
//         className="block mb-3 overflow-hidden rounded-lg bg-gray-100"
//       >
//         <img
//           src={product.images?.[0] || "/placeholder.png"}
//           alt={product.name}
//           className="
//             w-full
//             h-44 sm:h-56 md:h-60 lg:h-72
//             object-cover
//             transition-transform duration-300
//             group-hover:scale-105
//           "
//         />
//       </Link>

//       {/* PRODUCT INFO */}
//       <Link href={`/product/${product._id}`} className="block">
//         <h3
//           className="
//             text-base sm:text-lg md:text-xl
//             font-semibold
//             text-gray-900
//             truncate
//             mb-1
//           "
//           title={product.name}
//         >
//           {product.name}
//         </h3>

//         <p className="text-xs sm:text-sm text-gray-500 mb-2 capitalize">
//           {product.category || "Uncategorized"}
//         </p>
//         <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
//           <p className="text-base sm:text-lg font-medium text-gray-800">
//             ₦{product.price.toLocaleString()}
//           </p>

//           {product.oldPrice && (
//             <span className="line-through text-xs sm:text-sm text-gray-400">
//               ₦{product.oldPrice.toLocaleString()}
//             </span>
//           )}
//         </div>
//       </Link>

//       {/* ADD TO CART BUTTON */}
//       <button
//         onClick={() => {
//           const defaultSize =
//             product.sizes?.length > 0 ? product.sizes[0] : null;

//           const defaultColor =
//             product.colors?.length > 0 ? product.colors[0] : null;

//           addToCart(product, 1, {
//             size: defaultSize,
//             color: defaultColor,
//           });

//           showToast("Added to cart!");
//         }}
//         className="
//           absolute top-3 right-3 sm:top-4 sm:right-4
//           bg-black text-white
//           w-9 h-9 sm:w-10 sm:h-10 
//           flex items-center justify-center
//           rounded-full
//           shadow-md
//           transition hover:bg-gray-800
//           text-sm
//         "
//         title="Add to Cart"
//         aria-label={`Add ${product.name} to cart`}
//       >
//         <i className="fas fa-cart-plus"></i>
//       </button>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useCart } from "@/app/context/cartContext";
import { useToast } from "@/app/context/toastContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  // Handler for the cart button click
  function handleAddToCart() {
    if (product.stock === 0) {
      showToast("Out of stock");
      return;
    }

    const defaultSize = product.sizes?.length > 0 ? product.sizes[0] : null;
    const defaultColor = product.colors?.length > 0 ? product.colors[0] : null;

    addToCart(product, 1, {
      size: defaultSize,
      color: defaultColor,
    });

    showToast("Added to cart!");
  }

  // Determine if out of stock
  const outOfStock = product.stock === 0;

  return (
    <div className="relative group p-3 sm:p-4">
      {/* IMAGE */}
      <Link
        href={`/product/${product._id}`}
        className="block mb-3 overflow-hidden rounded bg-gray-100"
      >
        <img
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.name}
          className="
            w-full
            h-44 sm:h-56 md:h-60 lg:h-72
            object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </Link>

      {/* PRODUCT INFO */}
      <Link href={`/product/${product._id}`} className="block">
        <h3
          className="
            text-base sm:text-lg md:text-xl
            font-semibold
            text-gray-900
            truncate
          "
          title={product.name}
        >
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mb-1 capitalize">
          {product.category || "Uncategorized"}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
          <p className="text-base sm:text-lg font-medium text-gray-800">
            ₦{product.price.toLocaleString()}
          </p>

          {product.oldPrice && (
            <span className="line-through text-xs sm:text-sm text-gray-400">
              ₦{product.oldPrice.toLocaleString()}
            </span>
          )}
        </div>
      </Link>

      {/* ADD TO CART BUTTON */}
      <button
        onClick={handleAddToCart}
        disabled={outOfStock}
        title={outOfStock ? "Out of stock" : `Add ${product.name} to cart`}
        aria-label={
          outOfStock
            ? `Out of stock: ${product.name}`
            : `Add ${product.name} to cart`
        }
        className={`
          absolute top-3 right-3 sm:top-4 sm:right-4
          w-9 h-9 sm:w-10 sm:h-10
          flex items-center justify-center
          rounded-full
          shadow-md
          text-sm
          transition
          ${
            outOfStock
              ? "bg-gray-400 cursor-not-allowed text-gray-700"
              : "bg-black text-white hover:bg-gray-800"
          }
        `}
      >
        {outOfStock ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <i className="fas fa-cart-plus"></i>
        )}
      </button>
    </div>
  );
}




// "use client";

// import Link from "next/link";
// import { useCart } from "@/app/context/cartContext";
// import { useToast } from "@/app/context/toastContext";

// export default function ProductCard({ product }) {
//   const { addToCart } = useCart();
//   const { showToast } = useToast();

//   // Pick default size + color
//   const defaultSize = product?.sizes?.[0] || null;
//   const defaultColor = product?.colors?.[0] || null;

//   // Build variantId (same logic as product page)
//   const defaultVariantId = `${product._id}-${defaultSize || "nosize"}-${
//     defaultColor || "nocolor"
//   }`;

//   return (
//     <div className="block border rounded p-4 hover:shadow-lg transition relative group">
//       {/* IMAGE + LINK */}
//       <Link href={`/product/${product._id}`}>
//         <img
//           src={product.images?.[0] || "/placeholder.png"}
//           alt={product.name}
//           className="w-full h-48 object-cover rounded mb-3"
//         />
//         <h3 className="text-lg font-semibold">{product.name}</h3>

//         <p className="text-gray-600">
//           ₦{product.price.toLocaleString()}
//           {product.oldPrice && (
//             <span className="line-through text-sm text-gray-400 ml-2">
//               ₦{product.oldPrice.toLocaleString()}
//             </span>
//           )}
//         </p>
//       </Link>

//       {/* ADD TO CART BUTTON */}
//       <button
//         onClick={() => {
//           addToCart({
//             ...product,
//             image: product.images?.[0] || "/placeholder.png",

//             // Important fields
//             selectedSize: defaultSize,
//             selectedColor: defaultColor,
//             variantId: defaultVariantId,

//             qty: 1,
//           });

//           showToast("Added to cart!");
//         }}
//         className="
//           absolute top-3 right-3 bg-black text-white 
//           p-2 rounded-full opacity-0 group-hover:opacity-100 
//           transition duration-200 shadow-md
//         "
//         title="Add to Cart"
//       >
//         <i className="fas fa-cart-plus"></i>
//       </button>
//     </div>
//   );
// }

