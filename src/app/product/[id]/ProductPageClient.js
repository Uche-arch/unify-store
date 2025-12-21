// // "use client";

// // import { useState } from "react";
// // import { useCart } from "@/app/context/cartContext";

// // export default function ProductPageClient({ product }) {
// //   const { addToCart } = useCart();
// //   const [qty, setQty] = useState(1);

// //  function handleAdd() {
// //    // Create a product object with a direct 'image' property for the cart
// //    const productWithImage = {
// //      ...product,
// //      image: product.images?.[0] || "/placeholder.png",
// //    };
// //    addToCart(productWithImage, qty);
// //    alert(`${product.name} added to cart`);
// //  }

// //   return (
// //     <main className="max-w-4xl mx-auto p-6">
// //       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

// //       <div className="flex flex-col md:flex-row gap-6">
// //         <img
// //           src={product.images?.[0] || "/placeholder.png"}
// //           alt={product.name}
// //           className="w-full md:w-1/2 object-cover rounded"
// //         />

// //         <div className="md:w-1/2">
// //           <p className="text-xl font-semibold mb-2">
// //             ₦{product.price.toLocaleString()}
// //           </p>
// //           {product.oldPrice && (
// //             <p className="line-through text-gray-400 mb-4">
// //               ₦{product.oldPrice.toLocaleString()}
// //             </p>
// //           )}

// //           <p className="mb-4">{product.description}</p>

// //           <div className="flex items-center space-x-2 mb-4">
// //             <label htmlFor="qty" className="font-semibold">
// //               Quantity:
// //             </label>
// //             <input
// //               id="qty"
// //               type="number"
// //               min={1}
// //               value={qty}
// //               onChange={(e) => setQty(Number(e.target.value))}
// //               className="border p-1 w-20 rounded"
// //             />
// //           </div>

// //           <button
// //             onClick={handleAdd}
// //             className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
// //           >
// //             Add to Cart
// //           </button>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// // "use client";

// // import { useState } from "react";
// // import { useCart } from "@/app/context/cartContext";
// // import { useToast } from "@/app/context/toastContext";
// // import Link from "next/link";

// // export default function ProductPageClient({ product, related }) {
// //   const { addToCart } = useCart();
// //   const [qty, setQty] = useState(1);
// //   const [mainImage, setMainImage] = useState(product.images?.[0]);
// //   const { showToast } = useToast();

// //   function handleAdd() {
// //     const productWithImage = {
// //       ...product,
// //       image: product.images?.[0],
// //     };

// //     addToCart(productWithImage, qty);
// //     showToast("Added to cart!");
// //     // alert(`${product.name} added to cart`);
// //   }

// //   return (
// //     <main className="max-w-6xl mx-auto p-6">
// //       {/* Product Title */}
// //       <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
// //       <p className="text-green-600 font-medium mb-6">
// //         Category: {product.category}
// //       </p>

// //       {/* Layout */}
// //       <div className="flex flex-col md:flex-row gap-10">
// //         {/* Left Side - Images */}
// //         <div className="md:w-1/2">
// //           <img
// //             src={mainImage}
// //             alt={product.name}
// //             className="w-full h-auto rounded-lg border"
// //           />

// //           {/* Thumbnails */}
// //           <div className="flex gap-3 mt-4">
// //             {product.images?.map((img, i) => (
// //               <img
// //                 key={i}
// //                 src={img}
// //                 onClick={() => setMainImage(img)}
// //                 className={`w-20 h-20 object-cover rounded border cursor-pointer ${
// //                   mainImage === img ? "border-green-600" : ""
// //                 }`}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Right side */}
// //         <div className="md:w-1/2">
// //           {/* Price */}
// //           <div className="flex items-center gap-3 mb-4">
// //             <p className="text-3xl font-bold text-green-700">
// //               ₦{product.price.toLocaleString()}
// //             </p>

// //             {product.oldPrice && (
// //               <p className="text-gray-400 line-through text-lg">
// //                 ₦{product.oldPrice.toLocaleString()}
// //               </p>
// //             )}
// //           </div>

// //           {/* Description */}
// //           <p className="text-gray-700 mb-6">{product.description}</p>

// //           {/* Quantity */}
// //           <div className="flex items-center gap-3 mb-6">
// //             <p className="font-semibold">Quantity:</p>
// //             <input
// //               type="number"
// //               min={1}
// //               value={qty}
// //               onChange={(e) => setQty(Number(e.target.value))}
// //               className="border p-2 w-20 rounded"
// //             />
// //           </div>

// //           {/* Add to Cart */}
// //           <button
// //             onClick={handleAdd}
// //             className="bg-green-600 text-white py-3 px-5 rounded-lg hover:bg-green-700 transition w-full md:w-auto"
// //           >
// //             Add to Cart
// //           </button>

// //           {/* Safe Checkout Box */}
// //           <div className="mt-8 p-4 border rounded-lg bg-gray-50">
// //             <p className="text-lg font-semibold mb-3">
// //               🔒 Guaranteed Safe Checkout
// //             </p>
// //             <div className="flex gap-3 flex-wrap">
// //               <img src="/visa.png" className="h-7" />
// //               <img src="/mastercard.png" className="h-7" />
// //               <img src="/paypal.png" className="h-7" />
// //               <img src="/applepay.png" className="h-7" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Related Products */}
// //       {related.length > 0 && (
// //         <div className="mt-16">
// //           <h2 className="text-2xl font-bold mb-6">Related Products</h2>

// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //             {related.map((item) => (
// //               <Link
// //                 key={item._id}
// //                 href={`/product/${item._id}`}
// //                 className="border rounded-lg p-3 hover:shadow-lg transition"
// //               >
// //                 <img
// //                   src={item.images?.[0]}
// //                   className="w-full h-40 object-cover rounded"
// //                 />
// //                 <p className="mt-3 font-semibold">{item.name}</p>
// //                 <p className="text-green-700 font-bold">
// //                   ₦{item.price.toLocaleString()}
// //                 </p>
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       )}

// //       {/* Spacer for footer */}
// //       <div className="h-20"></div>
// //     </main>
// //   );
// // }

//   "use client";

//   import { useState } from "react";
//   import { useCart } from "@/app/context/cartContext";
//   import { useToast } from "@/app/context/toastContext";
//   import Link from "next/link";

//   export default function ProductPageClient({ product, related }) {
//     const { addToCart } = useCart();
//     const { showToast } = useToast();

//     const [qty, setQty] = useState(1);
//     const [mainImage, setMainImage] = useState(product.images?.[0]);

//     // New states for selected size and color
//     const [selectedSize, setSelectedSize] = useState(
//       product.sizes && product.sizes.length > 0 ? product.sizes[0] : ""
//     );
//     const [selectedColor, setSelectedColor] = useState(
//       product.colors && product.colors.length > 0 ? product.colors[0] : ""
//     );

//     // function handleAdd() {
//     //   // Validation
//     //   if (product.sizes && product.sizes.length > 0 && !selectedSize) {
//     //     alert("Please select a size");
//     //     return;
//     //   }
//     //   if (product.colors && product.colors.length > 0 && !selectedColor) {
//     //     alert("Please select a color");
//     //     return;
//     //   }

//     //   const productWithOptions = {
//     //     ...product,
//     //     image: mainImage || product.images?.[0],
//     //     selectedSize,
//     //     selectedColor,
//     //   };

//     //   addToCart(productWithOptions, qty);
//     //   // addToCart(product, qty, { size: selectedSize, color: selectedColor });
//     //     // addToCart(productWithOptions, qty);

//     //   showToast("Added to cart!");
//     // }

//     function handleAdd() {
//       // Validation
//       if (product.sizes && product.sizes.length > 0 && !selectedSize) {
//         alert("Please select a size");
//         return;
//       }
//       if (product.colors && product.colors.length > 0 && !selectedColor) {
//         alert("Please select a color");
//         return;
//       }

//       addToCart(product, qty, {
//         size: selectedSize,
//         color: selectedColor,
//         image: mainImage || product.images?.[0],
//       });

//       showToast("Added to cart!");
//     }

//     return (
//       <main className="max-w-6xl mx-auto p-6">
//         {/* Product Title */}
//         <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//         <p className="text-green-600 font-medium mb-6">
//           Category: {product.category}
//         </p>

//         {/* Layout */}
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* Left Side - Images */}
//           <div className="md:w-1/2">
//             <img
//               src={mainImage}
//               alt={product.name}
//               className="w-full h-auto rounded-lg border"
//             />

//             {/* Thumbnails */}
//             <div className="flex gap-3 mt-4">
//               {product.images?.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   onClick={() => setMainImage(img)}
//                   className={`w-20 h-20 object-cover rounded border cursor-pointer ${
//                     mainImage === img ? "border-green-600" : ""
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="md:w-1/2">
//             {/* Price */}
//             <div className="flex items-center gap-3 mb-4">
//               <p className="text-3xl font-bold text-green-700">
//                 ₦{product.price.toLocaleString()}
//               </p>

//               {product.oldPrice && (
//                 <p className="text-gray-400 line-through text-lg">
//                   ₦{product.oldPrice.toLocaleString()}
//                 </p>
//               )}
//             </div>

//             {/* Description */}
//             <p className="text-gray-700 mb-6">{product.description}</p>

//             {/* Sizes selector */}
//             {product.sizes && product.sizes.length > 0 && (
//               <div className="mb-4">
//                 <label htmlFor="size" className="font-semibold mr-3">
//                   Size:
//                 </label>
//                 <select
//                   id="size"
//                   value={selectedSize}
//                   onChange={(e) => setSelectedSize(e.target.value)}
//                   className="border rounded p-1"
//                 >
//                   {product.sizes.map((size) => (
//                     <option key={size} value={size}>
//                       {size}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* Colors selector */}
//             {product.colors && product.colors.length > 0 && (
//               <div className="mb-6">
//                 <label htmlFor="color" className="font-semibold mr-3">
//                   Color:
//                 </label>
//                 <select
//                   id="color"
//                   value={selectedColor}
//                   onChange={(e) => setSelectedColor(e.target.value)}
//                   className="border rounded p-1"
//                 >
//                   {product.colors.map((color) => (
//                     <option key={color} value={color}>
//                       {color}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             )}

//             {/* Quantity */}
//             <div className="flex items-center gap-3 mb-6">
//               <p className="font-semibold">Quantity:</p>
//               <input
//                 type="number"
//                 min={1}
//                 value={qty}
//                 onChange={(e) => setQty(Number(e.target.value))}
//                 className="border p-2 w-20 rounded"
//               />
//             </div>

//             {/* Add to Cart */}
//             <button
//               onClick={handleAdd}
//               className="bg-green-600 text-white py-3 px-5 rounded-lg hover:bg-green-700 transition w-full md:w-auto"
//             >
//               Add to Cart
//             </button>

//             {/* Safe Checkout Box */}
//             <div className="mt-8 p-4 border rounded-lg bg-gray-50">
//               <p className="text-lg font-semibold mb-3">
//                 🔒 Guaranteed Safe Checkout
//               </p>
//               <div className="flex gap-3 flex-wrap">
//                 <img src="/visa.png" className="h-7" />
//                 <img src="/mastercard.png" className="h-7" />
//                 <img src="/paypal.png" className="h-7" />
//                 <img src="/applepay.png" className="h-7" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Related Products */}
//         {related.length > 0 && (
//           <div className="mt-16">
//             <h2 className="text-2xl font-bold mb-6">Related Products</h2>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               {related.map((item) => (
//                 <Link
//                   key={item._id}
//                   href={`/product/${item._id}`}
//                   className="border rounded-lg p-3 hover:shadow-lg transition"
//                 >
//                   <img
//                     src={item.images?.[0]}
//                     className="w-full h-40 object-cover rounded"
//                   />
//                   <p className="mt-3 font-semibold">{item.name}</p>
//                   <p className="text-green-700 font-bold">
//                     ₦{item.price.toLocaleString()}
//                   </p>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Spacer for footer */}
//         <div className="h-20"></div>
//       </main>
//     );
//   }

// Product page

// "use client";

// import { useState } from "react";
// import { useCart } from "@/app/context/cartContext";

// export default function ProductPageClient({ product }) {
//   const { addToCart } = useCart();
//   const [qty, setQty] = useState(1);

//  function handleAdd() {
//    // Create a product object with a direct 'image' property for the cart
//    const productWithImage = {
//      ...product,
//      image: product.images?.[0] || "/placeholder.png",
//    };
//    addToCart(productWithImage, qty);
//    alert(`${product.name} added to cart`);
//  }

//   return (
//     <main className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

//       <div className="flex flex-col md:flex-row gap-6">
//         <img
//           src={product.images?.[0] || "/placeholder.png"}
//           alt={product.name}
//           className="w-full md:w-1/2 object-cover rounded"
//         />

//         <div className="md:w-1/2">
//           <p className="text-xl font-semibold mb-2">
//             ₦{product.price.toLocaleString()}
//           </p>
//           {product.oldPrice && (
//             <p className="line-through text-gray-400 mb-4">
//               ₦{product.oldPrice.toLocaleString()}
//             </p>
//           )}

//           <p className="mb-4">{product.description}</p>

//           <div className="flex items-center space-x-2 mb-4">
//             <label htmlFor="qty" className="font-semibold">
//               Quantity:
//             </label>
//             <input
//               id="qty"
//               type="number"
//               min={1}
//               value={qty}
//               onChange={(e) => setQty(Number(e.target.value))}
//               className="border p-1 w-20 rounded"
//             />
//           </div>

//           <button
//             onClick={handleAdd}
//             className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useCart } from "@/app/context/cartContext";
// import { useToast } from "@/app/context/toastContext";
// import Link from "next/link";

// export default function ProductPageClient({ product, related }) {
//   const { addToCart } = useCart();
//   const [qty, setQty] = useState(1);
//   const [mainImage, setMainImage] = useState(product.images?.[0]);
//   const { showToast } = useToast();

//   function handleAdd() {
//     const productWithImage = {
//       ...product,
//       image: product.images?.[0],
//     };

//     addToCart(productWithImage, qty);
//     showToast("Added to cart!");
//     // alert(`${product.name} added to cart`);
//   }

//   return (
//     <main className="max-w-6xl mx-auto p-6">
//       {/* Product Title */}
//       <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//       <p className="text-green-600 font-medium mb-6">
//         Category: {product.category}
//       </p>

//       {/* Layout */}
//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Left Side - Images */}
//         <div className="md:w-1/2">
//           <img
//             src={mainImage}
//             alt={product.name}
//             className="w-full h-auto rounded-lg border"
//           />

//           {/* Thumbnails */}
//           <div className="flex gap-3 mt-4">
//             {product.images?.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 onClick={() => setMainImage(img)}
//                 className={`w-20 h-20 object-cover rounded border cursor-pointer ${
//                   mainImage === img ? "border-green-600" : ""
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="md:w-1/2">
//           {/* Price */}
//           <div className="flex items-center gap-3 mb-4">
//             <p className="text-3xl font-bold text-green-700">
//               ₦{product.price.toLocaleString()}
//             </p>

//             {product.oldPrice && (
//               <p className="text-gray-400 line-through text-lg">
//                 ₦{product.oldPrice.toLocaleString()}
//               </p>
//             )}
//           </div>

//           {/* Description */}
//           <p className="text-gray-700 mb-6">{product.description}</p>

//           {/* Quantity */}
//           <div className="flex items-center gap-3 mb-6">
//             <p className="font-semibold">Quantity:</p>
//             <input
//               type="number"
//               min={1}
//               value={qty}
//               onChange={(e) => setQty(Number(e.target.value))}
//               className="border p-2 w-20 rounded"
//             />
//           </div>

//           {/* Add to Cart */}
//           <button
//             onClick={handleAdd}
//             className="bg-green-600 text-white py-3 px-5 rounded-lg hover:bg-green-700 transition w-full md:w-auto"
//           >
//             Add to Cart
//           </button>

//           {/* Safe Checkout Box */}
//           <div className="mt-8 p-4 border rounded-lg bg-gray-50">
//             <p className="text-lg font-semibold mb-3">
//               🔒 Guaranteed Safe Checkout
//             </p>
//             <div className="flex gap-3 flex-wrap">
//               <img src="/visa.png" className="h-7" />
//               <img src="/mastercard.png" className="h-7" />
//               <img src="/paypal.png" className="h-7" />
//               <img src="/applepay.png" className="h-7" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       {related.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold mb-6">Related Products</h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((item) => (
//               <Link
//                 key={item._id}
//                 href={`/product/${item._id}`}
//                 className="border rounded-lg p-3 hover:shadow-lg transition"
//               >
//                 <img
//                   src={item.images?.[0]}
//                   className="w-full h-40 object-cover rounded"
//                 />
//                 <p className="mt-3 font-semibold">{item.name}</p>
//                 <p className="text-green-700 font-bold">
//                   ₦{item.price.toLocaleString()}
//                 </p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Spacer for footer */}
//       <div className="h-20"></div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useCart } from "@/app/context/cartContext";
// import { useToast } from "@/app/context/toastContext";
// import Link from "next/link";

// export default function ProductPageClient({ product, related }) {
//   const { addToCart } = useCart();
//   const { showToast } = useToast();
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState("");

//   const [qty, setQty] = useState(1);
//   const [mainImage, setMainImage] = useState(product.images?.[0]);

//   // New states for selected size and color
//   const [selectedSize, setSelectedSize] = useState(
//     product.sizes && product.sizes.length > 0 ? product.sizes[0] : ""
//   );
//   const [selectedColor, setSelectedColor] = useState(
//     product.colors && product.colors.length > 0 ? product.colors[0] : ""
//   );

//   function handleAdd() {
//     // Validation
//     if (product.sizes && product.sizes.length > 0 && !selectedSize) {
//       alert("Please select a size");
//       return;
//     }
//     if (product.colors && product.colors.length > 0 && !selectedColor) {
//       alert("Please select a color");
//       return;
//     }

//     const productWithOptions = {
//       ...product,
//       image: mainImage || product.images?.[0],
//       selectedSize,
//       selectedColor,
//     };

//     // addToCart(productWithOptions, qty);
//     addToCart(product, qty, { size: selectedSize, color: selectedColor });
//     showToast("Added to cart!");
//   }

//   return (
//     <main className="max-w-6xl mx-auto p-6">
//       {/* Product Title */}
//       <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//       <p className="text-green-600 font-medium mb-6">
//         Category: {product.category}
//       </p>

//       {/* Layout */}
//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Left Side - Images */}
//         <div className="md:w-1/2">
//           <img
//             src={mainImage}
//             alt={product.name}
//             className="w-full h-auto rounded-lg border cursor-pointer"
//             onClick={() => {
//               setModalImage(mainImage);
//               setModalOpen(true);
//             }}
//           />

//           {/* Thumbnails
//           <div className="flex gap-3 mt-4">
//             {product.images?.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 onClick={() => setMainImage(img)}
//                 className={`w-20 h-20 object-cover rounded border cursor-pointer ${
//                   mainImage === img ? "border-green-600" : ""
//                 }`}
//               />
//             ))}
//           </div> */}
//           {/* Thumbnails */}
//           <div className="flex gap-3 mt-4">
//             {product.images?.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 onClick={() => {
//                   setMainImage(img); // update main image
//                   setModalImage(img); // set modal image
//                   setModalOpen(true); // open full screen modal
//                 }}
//                 className={`w-20 h-20 object-cover rounded border cursor-pointer ${
//                   mainImage === img
//                     ? "border-green-600 ring-2 ring-green-600"
//                     : ""
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right side */}
//         <div className="md:w-1/2">
//           {/* Price */}
//           <div className="flex items-center gap-3 mb-4">
//             <p className="text-3xl font-bold text-green-700">
//               ₦{product.price.toLocaleString()}
//             </p>

//             {product.oldPrice && (
//               <p className="text-gray-400 line-through text-lg">
//                 ₦{product.oldPrice.toLocaleString()}
//               </p>
//             )}
//           </div>

//           {/* Description */}
//           <p className="text-gray-700 mb-6">{product.description}</p>

//           {/* Sizes selector */}
//           {product.sizes && product.sizes.length > 0 && (
//             <div className="mb-4">
//               <label htmlFor="size" className="font-semibold mr-3">
//                 Size:
//               </label>
//               <select
//                 id="size"
//                 value={selectedSize}
//                 onChange={(e) => setSelectedSize(e.target.value)}
//                 className="border rounded p-1"
//               >
//                 {product.sizes.map((size) => (
//                   <option key={size} value={size}>
//                     {size}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Colors selector */}
//           {product.colors && product.colors.length > 0 && (
//             <div className="mb-6">
//               <label htmlFor="color" className="font-semibold mr-3">
//                 Color:
//               </label>
//               <select
//                 id="color"
//                 value={selectedColor}
//                 onChange={(e) => setSelectedColor(e.target.value)}
//                 className="border rounded p-1"
//               >
//                 {product.colors.map((color) => (
//                   <option key={color} value={color}>
//                     {color}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* Quantity */}
//           <div className="flex items-center gap-3 mb-6">
//             <p className="font-semibold">Quantity:</p>
//             <input
//               type="number"
//               min={1}
//               value={qty}
//               onChange={(e) => setQty(Number(e.target.value))}
//               className="border p-2 w-20 rounded"
//             />
//           </div>

//           {/* Add to Cart */}
//           <button
//             onClick={handleAdd}
//             className="bg-green-600 text-white py-3 px-5 rounded-lg hover:bg-green-700 transition w-full md:w-auto"
//           >
//             Add to Cart
//           </button>

//           {/* Safe Checkout Box */}
//           <div className="mt-8 p-4 border rounded-lg bg-gray-50">
//             <p className="text-lg font-semibold mb-3">
//               🔒 Guaranteed Safe Checkout
//             </p>
//             <div className="flex gap-3 flex-wrap">
//               <img src="/visa.png" className="h-7" />
//               <img src="/mastercard.png" className="h-7" />
//               <img src="/paypal.png" className="h-7" />
//               <img src="/applepay.png" className="h-7" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       {related.length > 0 && (
//         <div className="mt-16">
//           <h2 className="text-2xl font-bold mb-6">Related Products</h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {related.map((item) => (
//               <Link
//                 key={item._id}
//                 href={`/product/${item._id}`}
//                 className="border rounded-lg p-3 hover:shadow-lg transition"
//               >
//                 <img
//                   src={item.images?.[0]}
//                   className="w-full h-40 object-cover rounded"
//                 />
//                 <p className="mt-3 font-semibold">{item.name}</p>
//                 <p className="text-green-700 font-bold">
//                   ₦{item.price.toLocaleString()}
//                 </p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Spacer for footer */}
//       <div className="h-20"></div>

//       {modalOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
//           onClick={() => setModalOpen(false)} // click anywhere to close
//         >
//           <img
//             src={modalImage}
//             className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
//           />
//         </div>
//       )}
//     </main>
//   );
// }

"use client";

import { useState } from "react";
import { useCart } from "@/app/context/cartContext";
import { useToast } from "@/app/context/toastContext";
import Header from "@/app/components/Header";
import Link from "next/link";

export default function ProductPageClient({ product, related }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const [qty, setQty] = useState(1);
  const [mainImage, setMainImage] = useState(product.images?.[0]);
  const [modalOpen, setModalOpen] = useState(false);

  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "");

  function handleAdd() {
    if (product.sizes?.length > 0 && !selectedSize) {
      alert("Please select a size");
      return;
    }

    if (product.colors?.length > 0 && !selectedColor) {
      alert("Please select a color");
      return;
    }

    addToCart(product, qty, {
      size: selectedSize,
      color: selectedColor,
      image: mainImage,
    });

    showToast("Added to cart!");
  }

  return (
    <>
      <main className="max-w-6xl mx-auto p-6">
        <Header></Header>
        {/* Title + Category */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-semi-bold tracking-tight">
            {product.name}
          </h1>
          <p className="text-green-600 font-medium mt-1">{product.category}</p>
        </div>

        {/* Main layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT — Image Section */}
          <div>
            {/* Main Image */}
            <div
              className="w-full overflow-hidden rounded-xl border cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              <img
                src={mainImage}
                className="w-full object-cover rounded-xl transition"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-5 overflow-x-auto pb-2">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 border rounded-lg object-cover cursor-pointer transition
                  ${
                    mainImage === img
                      ? "ring-2 ring-green-600 border-green-600"
                      : "opacity-80 hover:opacity-100"
                  }
                `}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Product Info */}
          <div className="flex flex-col">
            {/* Price */}
            <div className="flex items-end gap-4 mb-6">
              <p className="text-3xl md:text-4xl font-semi-bold text-green-700">
                ₦{product.price.toLocaleString()}
              </p>

              {product.oldPrice && (
                <p className="text-gray-400 line-through text-xl">
                  ₦{product.oldPrice.toLocaleString()}
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Size Selector */}
            {product.sizes?.length > 0 && (
              <div className="mb-5">
                <p className="font-semibold mb-2">Size</p>

                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2 border rounded-lg transition text-sm
                      ${
                        selectedSize === s
                          ? "border-green-600 bg-green-50"
                          : "hover:bg-gray-100"
                      }
                    `}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selector */}
            {product.colors?.length > 0 && (
              <div className="mb-6">
                <p className="font-semibold mb-2">Color</p>

                <div className="flex flex-wrap gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-4 py-2 border rounded-lg transition text-sm
                      ${
                        selectedColor === c
                          ? "border-green-600 bg-green-50"
                          : "hover:bg-gray-100"
                      }
                    `}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-8">
              <p className="font-semibold">Quantity:</p>
              <input
                type="number"
                min={1}
                max={product.stock}
                value={qty}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value > product.stock) {
                    alert(`Only ${product.stock} left in stock`);
                    return;
                  }
                  setQty(value);
                }}
                className="border p-2 w-24 text-center rounded-lg"
              />
            </div>

            {/* Add to Cart button */}
            <button
              disabled={product.stock === 0}
              onClick={handleAdd}
              className={`py-4 rounded-lg text-lg font-semibold transition
    ${
      product.stock === 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-green-600 hover:bg-green-700 text-white"
    }`}
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>

            {/* Safe Checkout */}
            <div className="mt-8 p-5 bg-gray-50">
              <p className="text-lg flex items-center gap-2 justify-center">
                <i className="fas fa-lock"></i> Safe & Secure Checkout
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-semi-bold mb-8">
              You May Also Like
            </h2>

            <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth hide-scrollbar">
              {related.map((item) => (
                <div
                  key={item._id}
                  className="w-[200px] h-[320px] md:w-[300px] md:h-[340px] bg-white shadow-sm
   flex-shrink-0 overflow-hidden"
                >
                  <Link href={`/product/${item._id}`}>
                    <img
                      src={item.images?.[0]}
                      className="w-full h-[60%] object-cover"
                    />
                  </Link>

                  <div className="p-3 flex flex-col justify-between h-[40%]">
                    <div>
                      <p className="font-semibold truncate">{item.name}</p>
                      <p className="text-green-700 font-bold text-lg mt-1">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      className="mt-3 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg font-semibold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Modal Image */}
        {modalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <img
              src={mainImage}
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </main>
      {/* FOOTER */}
      <footer className="mt-14 bg-gray-900 text-gray-400 text-center text-sm py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p>© 2025 UnifyStore — All Rights Reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Contact Us"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
