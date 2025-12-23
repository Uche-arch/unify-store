// "use client";

// import { useCart } from "@/app/context/cartContext";
// import Link from "next/link";
// import { useState } from "react";
// // import Header from "./components/Header";
// import Header from "@/app/components/Header";

// export default function CartPage() {
//   const { cart, updateQty, removeFromCart, clearCart } = useCart();

//   const [useFreeShipping, setUseFreeShipping] = useState(false);

//   const productTotal = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   // Shipping logic
//   const shippingFee = productTotal > 50000 && useFreeShipping ? 0 : 1500;

//   const finalTotal = productTotal + shippingFee;

//   if (cart.length === 0)
//     return (
//       <main className="max-w-3xl mx-auto p-6 text-center">
//         <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
//         <Link href="/" className="text-blue-600 underline">
//           Continue Shopping
//         </Link>
//       </main>
//     );

//   return (
//     // <Header />

//     <main className="max-w-4xl mx-auto p-6">
//       <Header />

//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

//       <table className="w-full border-collapse mb-6">
//         <thead>
//           <tr className="border-b">
//             <th className="text-left p-2">Product</th>
//             <th className="text-left p-2">Price</th>
//             <th className="text-left p-2">Quantity</th>
//             <th className="text-left p-2">Subtotal</th>
//             <th className="p-2">Remove</th>
//           </tr>
//         </thead>
//         <tbody>

//           {cart.map(
//             ({
//               _id,
//               variantId,
//               name,
//               price,
//               qty,
//               image,
//               selectedSize,
//               selectedColor,
//             }) => (
//               <tr key={variantId} className="border-b hover:bg-gray-50">
//                 {/* IMAGE + NAME */}
//                 <td className="p-2 flex items-center gap-3">
//                   <img
//                     src={image || "/placeholder.png"}
//                     alt={name}
//                     className="w-14 h-14 object-cover rounded-md border"
//                   />
//                   <div>
//                     <span>{name}</span>
//                     {(selectedSize || selectedColor) && (
//                       <p className="text-sm text-gray-600">
//                         {selectedSize && <span>Size: {selectedSize} </span>}
//                         {selectedColor && <span>Color: {selectedColor}</span>}
//                       </p>
//                     )}
//                   </div>
//                 </td>

//                 <td className="p-2">₦{price.toLocaleString()}</td>

//                 {/* QUANTITY INPUT */}
//                 <td className="p-2">
//                   <input
//                     type="number"
//                     min={1}
//                     value={qty}
//                     onChange={(e) => {
//                       const newQty =
//                         e.target.value === "" ? "" : Number(e.target.value);
//                       updateQty(variantId, newQty);
//                     }}
//                     onBlur={(e) => {
//                       if (e.target.value === "" || Number(e.target.value) < 1) {
//                         updateQty(variantId, 1);
//                       }
//                     }}
//                     className="border p-1 w-20 text-center"
//                   />
//                 </td>

//                 <td className="p-2">₦{(price * qty).toLocaleString()}</td>

//                 <td className="p-2 text-center">
//                   <button
//                     onClick={() => removeFromCart(variantId)}
//                     className="text-red-600 hover:underline"
//                   >
//                     <i className="fas fa-trash"></i>
//                   </button>
//                 </td>
//               </tr>
//             )
//           )}
//         </tbody>
//       </table>

//       {/* SHIPPING + TOTAL */}
//       <div className="border-t pt-4 mb-6">
//         <p className="text-lg font-semibold">
//           Products Total: ₦{productTotal.toLocaleString()}
//         </p>

//         {productTotal > 50000 && (
//           <label className="flex items-center gap-2 mt-2 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={useFreeShipping}
//               onChange={(e) => setUseFreeShipping(e.target.checked)}
//             />
//             <span className="text-green-700 font-medium">
//               Use Free Shipping
//             </span>
//           </label>
//         )}

//         <p className="text-lg mt-2">
//           Shipping Fee:{" "}
//           <span className="font-semibold">
//             {shippingFee === 0
//               ? "₦0 (Free Shipping Applied)"
//               : `₦${shippingFee}`}
//           </span>
//         </p>

//         <p className="text-2xl font-bold mt-3">
//           Final Total: ₦{finalTotal.toLocaleString()}
//         </p>
//       </div>

//       <div className="flex justify-between items-center">
//         <button
//           onClick={clearCart}
//           className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//         >
//           Clear Cart
//         </button>

//         <Link
//           href="/checkout"
//           className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
//         >
//           Proceed to Checkout
//         </Link>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useCart } from "@/app/context/cartContext";
// import Link from "next/link";
// import { useState } from "react";
// import Header from "@/app/components/Header";

// export default function CartPage() {
//   const { cart, updateQty, removeFromCart, clearCart } = useCart();
//   const [useFreeShipping, setUseFreeShipping] = useState(false);

//   const productTotal = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   const shippingFee = productTotal > 50000 && useFreeShipping ? 0 : 1500;
//   const finalTotal = productTotal + shippingFee;

//   // EMPTY CART PAGE
//   if (cart.length === 0)
//     return (
//       <main className="max-w-4xl mx-auto p-8 text-center">
//         <Header />
//         <h2 className="text-3xl font-bold my-6">Your Cart is Empty</h2>
//         <Link
//           href="/shop"
//           className="inline-block mt-4 bg-green-600 text-white py-3 px-8 rounded-lg hover:bg-green-700 transition"
//         >
//           Go to Shop
//         </Link>
//       </main>
//     );

//   return (
//     <main className="max-w-5xl mx-auto p-6">
//       <Header />

//       <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

//       {/* DESKTOP TABLE */}
//       <div className="hidden md:block bg-white rounded-xl ">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="border-b bg-gray-50">
//               <th className="text-left p-4 font-semibold">Product</th>
//               <th className="text-left p-4 font-semibold">Price</th>
//               <th className="text-left p-4 font-semibold">Quantity</th>
//               <th className="text-left p-4 font-semibold">Subtotal</th>
//               <th className="p-4 font-semibold">Remove</th>
//             </tr>
//           </thead>

//           <tbody>
//             {cart.map(
//               ({
//                 _id,
//                 variantId,
//                 name,
//                 price,
//                 qty,
//                 image,
//                 selectedSize,
//                 selectedColor,
//               }) => (
//                 <tr
//                   key={variantId}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   {/* PRODUCT */}
//                   <td className="p-4 flex items-center gap-4">
//                     <img
//                       src={image}
//                       className="w-16 h-16 rounded-lg object-cover border"
//                     />
//                     <div>
//                       <p className="font-medium">{name}</p>
//                       {(selectedSize || selectedColor) && (
//                         <p className="text-sm text-gray-500">
//                           {selectedSize && <span>Size: {selectedSize} </span>}
//                           {selectedColor && (
//                             <span> • Color: {selectedColor}</span>
//                           )}
//                         </p>
//                       )}
//                     </div>
//                   </td>

//                   <td className="p-4 font-medium">₦{price.toLocaleString()}</td>

//                   {/* QTY */}
//                   <td className="p-4">
//                     <input
//                       type="number"
//                       min={1}
//                       value={qty}
//                       onChange={(e) =>
//                         updateQty(
//                           variantId,
//                           e.target.value === "" ? "" : Number(e.target.value)
//                         )
//                       }
//                       onBlur={(e) => {
//                         if (!e.target.value || Number(e.target.value) < 1) {
//                           updateQty(variantId, 1);
//                         }
//                       }}
//                       className="border rounded-md p-2 w-20 text-center"
//                     />
//                   </td>

//                   <td className="p-4 font-semibold">
//                     ₦{(price * qty).toLocaleString()}
//                   </td>

//                   <td className="p-4 text-center">
//                     <button
//                       onClick={() => removeFromCart(variantId)}
//                       className="text-red-600 hover:text-red-800 text-xl"
//                     >
//                       <i className="fas fa-trash"></i>
//                     </button>
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE CARD LIST */}
//       <div className="md:hidden flex flex-col gap-4 mt-4">
//         {cart.map((item) => (
//           <div
//             key={item.variantId}
//             className="bg-white rounded-xl shadow-sm border p-4"
//           >
//             <div className="flex gap-3">
//               <img
//                 src={item.image}
//                 className="w-20 h-20 rounded-lg object-cover border"
//               />
//               <div className="flex-1">
//                 <p className="font-semibold">{item.name}</p>
//                 {(item.selectedSize || item.selectedColor) && (
//                   <p className="text-sm text-gray-600">
//                     {item.selectedSize && (
//                       <span>Size: {item.selectedSize}</span>
//                     )}
//                     {item.selectedColor && (
//                       <span> • Color: {item.selectedColor}</span>
//                     )}
//                   </p>
//                 )}

//                 <p className="text-lg font-bold mt-1">
//                   ₦{item.price.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             {/* QTY ROW */}
//             <div className="flex justify-between items-center mt-4">
//               <input
//                 type="number"
//                 min={1}
//                 value={item.qty}
//                 onChange={(e) =>
//                   updateQty(
//                     item.variantId,
//                     e.target.value === "" ? "" : Number(e.target.value)
//                   )
//                 }
//                 onBlur={(e) => {
//                   if (!e.target.value || Number(e.target.value) < 1) {
//                     updateQty(item.variantId, 1);
//                   }
//                 }}
//                 className="border rounded-md p-2 w-20 text-center"
//               />

//               <button
//                 onClick={() => removeFromCart(item.variantId)}
//                 className="text-red-600 text-lg"
//               >
//                 <i className="fas fa-trash"></i>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* TOTALS SECTION */}
//       <div className="mt-10 bg-white shadow-sm border rounded-xl p-6">
//         <p className="text-lg font-semibold">
//           Products Total: ₦{productTotal.toLocaleString()}
//         </p>

//         {productTotal > 50000 && (
//           <label className="flex items-center gap-2 mt-4 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={useFreeShipping}
//               onChange={(e) => setUseFreeShipping(e.target.checked)}
//             />
//             <span className="text-green-700 font-medium">
//               Apply Free Shipping
//             </span>
//           </label>
//         )}

//         <p className="text-lg mt-3">
//           Shipping Fee:{" "}
//           <span className="font-semibold">
//             {shippingFee === 0 ? "₦0 (Free)" : `₦${shippingFee}`}
//           </span>
//         </p>

//         <p className="text-3xl font-bold mt-4">
//           Final Total: ₦{finalTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* ACTION BUTTONS */}
//       <div className="flex justify-between items-center mt-8">
//         <button
//           onClick={clearCart}
//           className="bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition"
//         >
//           Clear Cart
//         </button>

//         <Link
//           href="/checkout"
//           className="bg-green-600 text-white py-3 px-10 rounded-lg hover:bg-green-700 transition font-semibold"
//         >
//           Proceed to Checkout
//         </Link>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useCart } from "@/app/context/cartContext";
// import Link from "next/link";
// import { useState } from "react";
// import Header from "@/app/components/Header";

// export default function CartPage() {
//   const { cart, updateQty, removeFromCart, clearCart } = useCart();
//   const [useFreeShipping, setUseFreeShipping] = useState(false);

//   const productTotal = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   const shippingFee = productTotal > 50000 && useFreeShipping ? 0 : 1500;
//   const finalTotal = productTotal + shippingFee;

//   // EMPTY CART
//   if (cart.length === 0)
//     return (
//       <main className="max-w-4xl mx-auto p-8 text-center">
//         <Header />
//         <h2 className="text-3xl font-bold mt-10 mb-6">Your Cart is Empty</h2>

//         <Link
//           href="/shop"
//           className="inline-block bg-green-600 text-white py-3 px-8 rounded-lg shadow hover:bg-green-700 transition"
//         >
//           Go to Shop
//         </Link>
//       </main>
//     );

//   return (
//     <main className="max-w-6xl mx-auto p-6">
//       <Header />

//       <h1 className="text-4xl mb-10">Shopping Cart</h1>

//       {/* DESKTOP TABLE */}
//       <div className="hidden md:block bg-white rounded-2xl  overflow-hidden">
//         <table className="w-full">
//           <thead>
//             <tr className="bg-gray-100 border-b text-gray-700">
//               <th className="text-left p-5 font-semibold">Product</th>
//               <th className="text-left p-5 font-semibold">Price</th>
//               <th className="text-left p-5 font-semibold">Qty</th>
//               <th className="text-left p-5 font-semibold">Subtotal</th>
//               <th className="p-5 font-semibold text-center">Remove</th>
//             </tr>
//           </thead>

//           <tbody>
//             {cart.map(
//               ({
//                 variantId,
//                 name,
//                 price,
//                 qty,
//                 image,
//                 selectedSize,
//                 selectedColor,
//               }) => (
//                 <tr
//                   key={variantId}
//                   className="border-b hover:bg-gray-50 transition"
//                 >
//                   {/* PRODUCT */}
//                   <td className="p-5 flex items-center gap-5">
//                     <img
//                       src={image}
//                       className="w-20 h-20 rounded-xl object-cover border shadow-sm"
//                     />

//                     <div>
//                       <p className="font-semibold text-lg">{name}</p>
//                       {(selectedSize || selectedColor) && (
//                         <p className="text-sm text-gray-500">
//                           {selectedSize && <span>Size: {selectedSize}</span>}
//                           {selectedColor && (
//                             <span> • Color: {selectedColor}</span>
//                           )}
//                         </p>
//                       )}
//                     </div>
//                   </td>

//                   <td className="p-5 font-medium text-gray-700">
//                     ₦{price.toLocaleString()}
//                   </td>

//                   {/* QTY */}
//                   <td className="p-5">
//                     <input
//                       type="number"
//                       min={1}
//                       value={qty}
//                       onChange={(e) =>
//                         updateQty(
//                           variantId,
//                           e.target.value === "" ? "" : Number(e.target.value)
//                         )
//                       }
//                       onBlur={(e) => {
//                         if (!e.target.value || Number(e.target.value) < 1)
//                           updateQty(variantId, 1);
//                       }}
//                       className="border rounded-lg p-2 w-20 text-center bg-gray-50 focus:outline-green-600"
//                     />
//                   </td>

//                   <td className="p-5 font-bold text-black">
//                     ₦{(price * qty).toLocaleString()}
//                   </td>

//                   <td className="p-5 text-center">
//                     <button
//                       onClick={() => removeFromCart(variantId)}
//                       className="text-red-500 hover:text-red-700 text-xl"
//                     >
//                       <i className="fas fa-trash"></i>
//                     </button>
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* MOBILE CARD LIST */}
//       <div className="md:hidden flex flex-col gap-5 mt-5">
//         {cart.map((item) => (
//           <div
//             key={item.variantId}
//             className="bg-white rounded-2xl shadow border p-5"
//           >
//             <div className="flex gap-4">
//               <img
//                 src={item.image}
//                 className="w-24 h-24 rounded-xl object-cover border shadow"
//               />

//               <div className="flex-1">
//                 <p className="font-semibold text-lg">{item.name}</p>

//                 {(item.selectedSize || item.selectedColor) && (
//                   <p className="text-sm text-gray-600">
//                     {item.selectedSize && (
//                       <span>Size: {item.selectedSize}</span>
//                     )}
//                     {item.selectedColor && (
//                       <span> • Color: {item.selectedColor}</span>
//                     )}
//                   </p>
//                 )}

//                 <p className="text-xl font-bold text-green-700 mt-1">
//                   ₦{item.price.toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             {/* QTY + REMOVE */}
//             <div className="flex justify-between items-center mt-5">
//               <input
//                 type="number"
//                 min={1}
//                 value={item.qty}
//                 onChange={(e) =>
//                   updateQty(
//                     item.variantId,
//                     e.target.value === "" ? "" : Number(e.target.value)
//                   )
//                 }
//                 onBlur={(e) => {
//                   if (!e.target.value || Number(e.target.value) < 1)
//                     updateQty(item.variantId, 1);
//                 }}
//                 className="border rounded-lg p-2 w-20 text-center bg-gray-50 focus:outline-green-600"
//               />

//               <button
//                 onClick={() => removeFromCart(item.variantId)}
//                 className="text-red-500 text-xl hover:text-red-700"
//               >
//                 <i className="fas fa-trash"></i>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* TOTALS SECTION */}
//       <div className="mt-10 bg-white shadow border p-6">
//         <p className="text-xl font-semibold">
//           Products Total: ₦{productTotal.toLocaleString()}
//         </p>

//         {productTotal > 50000 && (
//           <label className="flex items-center gap-2 mt-4 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={useFreeShipping}
//               onChange={(e) => setUseFreeShipping(e.target.checked)}
//               className="h-5 w-5"
//             />
//             <span className="text-green-700 font-medium">
//               Apply Free Shipping
//             </span>
//           </label>
//         )}

//         <p className="text-lg mt-4">
//           Shipping Fee:{" "}
//           <span className="font-semibold text-gray-800">
//             {shippingFee === 0 ? "₦0 (Free)" : `₦${shippingFee}`}
//           </span>
//         </p>

//         <p className="text-4xl font-extrabold mt-6">
//           Total: ₦{finalTotal.toLocaleString()}
//         </p>
//       </div>

//       {/* ACTION BUTTONS */}
//       <div className="flex flex-col md:flex-row justify-between gap-4 mt-10">
//         <button
//           onClick={clearCart}
//           className="bg-red-500 text-white py-3 px-6 rounded-xl shadow hover:bg-red-600 transition text-lg font-semibold"
//         >
//           Clear Cart
//         </button>

//         <Link
//           href="/checkout"
//           className="bg-green-600 text-white py-3 px-10 rounded-xl shadow hover:bg-green-700 transition text-lg font-semibold text-center"
//         >
//           Proceed to Checkout
//         </Link>
//       </div>
//     </main>
//   );
// }

"use client";

import { useCart } from "@/app/context/cartContext";
import Link from "next/link";
import { useState } from "react";
import Header from "@/app/components/Header";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const [useFreeShipping, setUseFreeShipping] = useState(false);

  const productTotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shippingFee = productTotal > 50000 && useFreeShipping ? 0 : 1500;
  const finalTotal = productTotal + shippingFee;

  /* EMPTY CART */
  if (cart.length === 0)
    return (
      <main className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center px-4">
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            Your Cart is Empty
          </h2>

          <Link
            href="/shop"
            className="bg-green-600 text-white py-2.5 px-7 rounded shadow hover:bg-green-700 transition"
          >
            Go to Shop
          </Link>
        </div>
      </main>
    );

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* PAGE CONTENT */}
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 pt-6">
        <h1 className="text-xl md:text-4xl mb-4 md:mb-10">Shopping Cart</h1>

        {/* DESKTOP TABLE */}
        {/* <div className="hidden md:block bg-white rounded overflow-hidden border border-bg-gray"> */}
        <div className="hidden md:block bg-white rounded overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-700">
                <th className="text-left p-5">Product</th>
                <th className="text-left p-5">Price</th>
                <th className="text-left p-5">Qty</th>
                <th className="text-left p-5">Subtotal</th>
                <th className="p-5 text-center">Remove</th>
              </tr>
            </thead>

            <tbody>
              {cart.map(
                ({
                  variantId,
                  name,
                  price,
                  qty,
                  image,
                  selectedSize,
                  selectedColor,
                }) => (
                  <tr key={variantId} className="border-b border-gray-200">
                    <td className="p-5 flex items-center gap-5">
                      <img
                        src={image}
                        className="w-20 h-20 rounded-xl object-cover border"
                      />
                      <div>
                        <p className="font-semibold">{name}</p>
                        {(selectedSize || selectedColor) && (
                          <p className="text-sm text-gray-500">
                            {selectedSize && `Size: ${selectedSize}`}
                            {selectedColor && ` • Color: ${selectedColor}`}
                          </p>
                        )}
                      </div>
                    </td>

                    <td className="p-5">₦{price.toLocaleString()}</td>

                    <td className="p-5">
                      <input
                        type="number"
                        min={1}
                        value={qty}
                        onChange={(e) =>
                          updateQty(variantId, Number(e.target.value) || 1)
                        }
                        className="border rounded-lg p-2 w-20 text-center bg-gray-50"
                      />
                    </td>

                    <td className="p-5 font-semibold">
                      ₦{(price * qty).toLocaleString()}
                    </td>

                    <td className="p-5 text-center">
                      <button
                        onClick={() => removeFromCart(variantId)}
                        className="text-red-500 hover:text-red-700 text-xl"
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="md:hidden flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.variantId}
              className="bg-white rounded border border-gray-200 p-4 shadow"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  className="w-24 h-24 rounded-lg object-cover border"
                />

                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>

                  {(item.selectedSize || item.selectedColor) && (
                    <p className="text-sm text-gray-600">
                      {item.selectedSize && `Size: ${item.selectedSize}`}
                      {item.selectedColor && ` • Color: ${item.selectedColor}`}
                    </p>
                  )}

                  <p className="text-lg font-bold text-green-700 mt-1">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <input
                  type="number"
                  min={1}
                  value={item.qty}
                  onChange={(e) =>
                    updateQty(item.variantId, Number(e.target.value) || 1)
                  }
                  className="border border-gray-200 rounded-lg p-1 w-15 text-center bg-gray-50"
                />

                <button
                  onClick={() => removeFromCart(item.variantId)}
                  className="text-red-500"
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* TOTALS */}
        <div className="mt-8 bg-white border border-gray-200 rounded p-5">
          <p className="text-lg font-semibold">
            Products Total: ₦{productTotal.toLocaleString()}
          </p>

          {productTotal > 50000 && (
            <label className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                checked={useFreeShipping}
                onChange={(e) => setUseFreeShipping(e.target.checked)}
                className="w-5 h-5"
              />
              <span className="text-green-700 font-medium">
                Apply Free Shipping
              </span>
            </label>
          )}

          <p className="mt-3">
            Shipping Fee:{" "}
            <span className="font-semibold">
              {shippingFee === 0 ? "₦0 (Free)" : `₦${shippingFee}`}
            </span>
          </p>

          <p className="text-xl md:text-4xl font-extrabold mt-5">
            Total: ₦{finalTotal.toLocaleString()}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white py-2 px-6 rounded font-semibold hover:bg-red-600"
          >
            Clear Cart
          </button>

          <Link
            href="/checkout"
            className="bg-green-600 text-white py-3 px-10 rounded font-semibold text-center hover:bg-green-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
