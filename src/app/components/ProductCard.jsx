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


"use client";

import Link from "next/link";
import { useCart } from "@/app/context/cartContext";
import { useToast } from "@/app/context/toastContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  return (
    <div className="relative group p-4">
      {/* IMAGE + LINK */}
      <Link
        href={`/product/${product._id}`}
        className="block mb-4 overflow-hidden"
      >
        <img
          src={product.images?.[0] || "/placeholder.png"}
          alt={product.name}
          className="w-[100%] h-60 lg:h-72 object-cover"
        />
      </Link>

      <Link href={`/product/${product._id}`} className="block">
        <h3
          className="text-xl font-semibold text-gray-900 truncate max-w-full mb-1"
          title={product.name}
        >
          {product.name}
        </h3>

        <p className="text-sm text-gray-500 mb-2 capitalize">
          {product.category || "Uncategorized"}
        </p>

        <p className="text-lg font-medium text-gray-800">
          ₦{product.price.toLocaleString()}
          {product.oldPrice && (
            <span className="line-through text-sm text-gray-400 ml-3">
              ₦{product.oldPrice.toLocaleString()}
            </span>
          )}
        </p>
      </Link>

      {/* ADD TO CART BUTTON */}
      <button
        onClick={() => {
          const defaultSize =
            product.sizes?.length > 0 ? product.sizes[0] : null;

          const defaultColor =
            product.colors?.length > 0 ? product.colors[0] : null;

          addToCart(product, 1, {
            size: defaultSize,
            color: defaultColor,
          });

          showToast("Added to cart!");
        }}
        className="
          absolute top-6 right-6
          bg-black text-white 
          w-8 h-8 flex items-center justify-center
          rounded-full
          shadow-md
          transition hover:bg-gray-800
          text-sm
        "
        title="Add to Cart"
        aria-label={`Add ${product.name} to cart`}
      >
        <i className="fas fa-cart-plus"></i>
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

