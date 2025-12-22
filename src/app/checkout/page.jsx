// "use client";

// import { useState } from "react";
// import { useCart } from "@/app/context/cartContext";
// // import Header from "./components/Header";

// export default function CheckoutPage() {
//   const { cart, clearCart } = useCart();
//   const [loading, setLoading] = useState(false);

//   // Shipping fee constants
//   const SHIPPING_FEE = 1500;
//   const FREE_SHIPPING_THRESHOLD = 50000;

//   const [orderInfo, setOrderInfo] = useState({
//     firstName: "",
//     lastName: "",
//     country: "",
//     street: "",
//     city: "",
//     state: "",
//     phone: "",
//     email: "",
//     notes: "",
//     freeShipping: false,
//   });

//   const [submitted, setSubmitted] = useState(false);

//   // Calculate products total
//   const productsTotal = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   // Calculate shipping cost based on free shipping toggle and threshold
//   const shippingCost =
//     orderInfo.freeShipping && productsTotal >= FREE_SHIPPING_THRESHOLD
//       ? 0
//       : SHIPPING_FEE;

//   const grandTotal = productsTotal + shippingCost;

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setOrderInfo((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   const [orderId, setOrderId] = useState(null);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true); // start spinner

//     const orderPayload = {
//       ...orderInfo,
//       cart,
//       total: grandTotal,
//       shippingFee: shippingCost,
//       freeShippingApplied: orderInfo.freeShipping,
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderPayload),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Failed to place order");
//         return;
//       }

//       setOrderId(data.orderId); // save the returned order ID here
//       setSubmitted(true);
//       clearCart();
//     } catch (error) {
//       alert("Network error, try again.");
//     } finally {
//       setLoading(false); // stop spinner
//     }
//   }

//   if (submitted) {
//     // Extract last 6 characters from full orderId
//     const shortOrderId = orderId ? orderId.slice(-6) : "";

//     return (
//       <div className="max-w-3xl mx-auto p-6 text-center">
//         <h2 className="text-2xl font-bold mb-4">Order Received!</h2>
//         <p>
//           Thank you,{" "}
//           <strong>
//             {orderInfo.firstName} {orderInfo.lastName}
//           </strong>
//           . Please make a bank transfer to:
//         </p>
//         <p className="mt-4 font-semibold">
//           Account Name: Your Store Name
//           <br />
//           Bank: Your Bank Name
//           <br />
//           Account Number: 1234567890
//           <br />
//           Amount: ₦{grandTotal.toLocaleString()}
//         </p>
//         <p className="mt-4 font-semibold">
//           Order ID: <span className="font-mono">{shortOrderId}</span>
//         </p>
//         <p className="mt-4">
//           During transfer ensure that you use your <strong>order ID</strong> as
//           reference.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <main className="max-w-6xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* LEFT: Customer Info Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex-1 space-y-4 border p-6 rounded shadow"
//         >
//           <h2 className="text-xl font-semibold mb-4">Customer Information</h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label htmlFor="firstName" className="mb-1 font-medium">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 placeholder="First Name"
//                 required
//                 className="border p-2 rounded w-full"
//                 value={orderInfo.firstName}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="lastName" className="mb-1 font-medium">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 placeholder="Last Name"
//                 required
//                 className="border p-2 rounded w-full"
//                 value={orderInfo.lastName}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="country" className="mb-1 font-medium">
//               Country
//             </label>
//             <select
//               id="country"
//               name="country"
//               required
//               className="border p-2 rounded w-full"
//               value={orderInfo.country}
//               onChange={handleChange}
//             >
//               <option value="">Select Country</option>
//               <option value="Nigeria">Nigeria</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="street" className="mb-1 font-medium">
//               Street Address
//             </label>
//             <input
//               type="text"
//               id="street"
//               name="street"
//               placeholder="Street Address"
//               required
//               className="border p-2 rounded w-full"
//               value={orderInfo.street}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="city" className="mb-1 font-medium">
//               Town / City
//             </label>
//             <input
//               type="text"
//               id="city"
//               name="city"
//               placeholder="Town / City"
//               required
//               className="border p-2 rounded w-full"
//               value={orderInfo.city}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="state" className="mb-1 font-medium">
//               State / Province
//             </label>
//             <select
//               id="state"
//               name="state"
//               required
//               className="border p-2 rounded w-full"
//               value={orderInfo.state}
//               onChange={handleChange}
//             >
//               <option value="">Select State</option>
//               <option value="Akwa Ibom">Akwa Ibom</option>
//               <option value="Lagos">Lagos</option>
//               <option value="Port Harcourt">Port Harcourt</option>
//             </select>
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="phone" className="mb-1 font-medium">
//               Phone Number*
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               placeholder="Phone Number"
//               required
//               className="border p-2 rounded w-full"
//               value={orderInfo.phone}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="email" className="mb-1 font-medium">
//               Email Address*
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Email Address"
//               required
//               className="border p-2 rounded w-full"
//               value={orderInfo.email}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="notes" className="mb-1 font-medium">
//               Order Notes (Optional)
//             </label>
//             <textarea
//               id="notes"
//               name="notes"
//               placeholder="Order Notes (Optional)"
//               rows={4}
//               className="border p-2 rounded w-full"
//               value={orderInfo.notes}
//               onChange={handleChange}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full mt-4 flex items-center justify-center gap-2 ${
//               loading ? "cursor-not-allowed opacity-70" : ""
//             }`}
//           >
//             {loading && <i className="fas fa-spinner fa-spin"></i>}
//             {loading ? "Processing..." : "Place Order"}
//           </button>
//         </form>

//         {/* RIGHT: Order Summary */}
//         <section className="flex-1 border p-6 rounded shadow">
//           <h2 className="text-xl font-semibold mb-4">Your Order</h2>
//           {cart.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             <>
//               <ul className="divide-y divide-gray-300 mb-4 max-h-[400px] overflow-y-auto">
//                 {cart.map(
//                   ({
//                     // _id,
//                     // name,
//                     // price,
//                     // qty,
//                     // image,
//                     // selectedSize,
//                     // selectedColor,

//                     _id,
//                     variantId,
//                     name,
//                     price,
//                     qty,
//                     image,
//                     selectedSize,
//                     selectedColor,
//                   }) => (
//                     <li
//                       key={variantId}
//                       className="flex items-center gap-4 py-3"
//                     >
//                       <img
//                         src={image || "/placeholder.png"}
//                         alt={name}
//                         className="w-14 h-14 object-cover rounded"
//                       />
//                       <div className="flex-1">
//                         <p className="font-semibold">{name}</p>
//                         {(selectedSize || selectedColor) && (
//                           <p className="text-sm text-gray-600">
//                             {selectedSize && <span>Size: {selectedSize} </span>}
//                             {selectedColor && (
//                               <span>Color: {selectedColor}</span>
//                             )}
//                           </p>
//                         )}
//                         <p>
//                           ₦{price.toLocaleString()} x {qty}
//                         </p>
//                       </div>
//                       <p className="font-semibold">
//                         ₦{(price * qty).toLocaleString()}
//                       </p>
//                     </li>
//                   )
//                 )}
//               </ul>

//               <div className="border-t pt-4">
//                 <div className="flex justify-between mb-2">
//                   <span>Subtotal:</span>
//                   <span>₦{productsTotal.toLocaleString()}</span>
//                 </div>

//                 <div className="flex justify-between items-center mb-2">
//                   <span>Shipping Fee:</span>
//                   <span>₦{shippingCost.toLocaleString()}</span>
//                 </div>

//                 {/* Free Shipping Checkbox if eligible */}
//                 {productsTotal >= FREE_SHIPPING_THRESHOLD && (
//                   <div className="mb-2">
//                     <label className="inline-flex items-center gap-2 cursor-pointer">
//                       <input
//                         type="checkbox"
//                         name="freeShipping"
//                         checked={orderInfo.freeShipping}
//                         onChange={handleChange}
//                       />
//                       <span>
//                         Apply Free Shipping (Orders over ₦
//                         {FREE_SHIPPING_THRESHOLD.toLocaleString()})
//                       </span>
//                     </label>
//                   </div>
//                 )}

//                 <div className="flex justify-between font-bold text-lg border-t pt-2">
//                   <span>Total:</span>
//                   <span>₦{grandTotal.toLocaleString()}</span>
//                 </div>
//               </div>
//             </>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useCart } from "@/app/context/cartContext";
// import Confetti from "react-confetti";
// import { useWindowSize } from "react-use"; // optional hook to get window size

// export default function CheckoutPage() {
//   const { cart, clearCart } = useCart();
//   const [loading, setLoading] = useState(false);
//   const { width, height } = useWindowSize();
//   const [showConfetti, setShowConfetti] = useState(false);

//   const SHIPPING_FEE = 1500;
//   const FREE_SHIPPING_THRESHOLD = 50000;

//   const [orderInfo, setOrderInfo] = useState({
//     firstName: "",
//     lastName: "",
//     country: "",
//     street: "",
//     city: "",
//     state: "",
//     phone: "",
//     email: "",
//     notes: "",
//     freeShipping: false,
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const productsTotal = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   const shippingCost =
//     orderInfo.freeShipping && productsTotal >= FREE_SHIPPING_THRESHOLD
//       ? 0
//       : SHIPPING_FEE;

//   const grandTotal = productsTotal + shippingCost;

//   function handleChange(e) {
//     const { name, value, type, checked } = e.target;
//     setOrderInfo((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }

//   const [orderId, setOrderId] = useState(null);
//   // Add state at top:
//   const [finalTotal, setFinalTotal] = useState(0);
//   const [confettiRecycle, setConfettiRecycle] = useState(true);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setLoading(true);

//     const orderPayload = {
//       ...orderInfo,
//       cart,
//       total: grandTotal,
//       shippingFee: shippingCost,
//       freeShippingApplied: orderInfo.freeShipping,
//     };

//     try {
//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderPayload),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         alert(data.error || "Failed to place order");
//         setLoading(false);
//         return;
//       }

//       setOrderId(data.orderId);
//       setFinalTotal(grandTotal); // <-- save total here
//       setSubmitted(true);
//       setShowConfetti(true);
//       setConfettiRecycle(true); // start recycling (dropping)
//       setTimeout(() => {
//         setConfettiRecycle(false); // stop spawning new confetti, existing falls
//       }, 6000);
//       setTimeout(() => {
//         setShowConfetti(false); // remove confetti from DOM after animation done
//       }, 10000); // extra few seconds so confetti disappears naturally
//       clearCart();
//     } catch (error) {
//       alert("Network error, try again.");
//     } finally {
//       setLoading(false);
//     }
//   }
//   if (submitted) {
//     const shortOrderId = orderId ? orderId.slice(-6) : "";

//     return (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//         {/* {showConfetti && <Confetti width={width} height={height} />} */}
//         {showConfetti && (
//           <Confetti
//             width={width}
//             height={height}
//             recycle={confettiRecycle} // control recycling dynamically
//           />
//         )}

//         <div className="max-w-3xl mx-auto p-8 text-center bg-white rounded shadow-md">
//           <h2 className="text-3xl font-bold mb-6 text-green-700">
//             Order Received!
//           </h2>
//           <p className="text-lg">
//             Thank you,{" "}
//             <strong>
//               {orderInfo.firstName} {orderInfo.lastName}
//             </strong>
//             . Please make a bank transfer to:
//           </p>
//           <p className="mt-6 font-semibold text-gray-700 leading-relaxed">
//             Account Name: Your Store Name
//             <br />
//             Bank: Your Bank Name
//             <br />
//             Account Number: 1234567890
//             <br />
//             Amount:{" "}
//             <span className="text-xl">₦{finalTotal.toLocaleString()}</span>
//           </p>
//           <p className="mt-6 font-semibold">
//             Order ID:{" "}
//             <span className="font-mono bg-gray-100 px-2 py-1 rounded">
//               {shortOrderId}
//             </span>
//           </p>
//           <p className="mt-6 text-gray-600">
//             During transfer ensure that you use your <strong>order ID</strong>{" "}
//             as reference.
//           </p>
//           <p className="mt-4 text-gray-600">
//             We’ll reach out to you shortly to confirm your order. Shipping will
//             begin within
//             <strong> 3 working days</strong>, and we’ll keep in touch with
//             updates.
//           </p>
//           <button
//             onClick={() => (window.location.href = "/shop")}
//             className="mt-8 bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition"
//           >
//             Back to Shop
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <main className="px-8 py-5 bg-gray-50 min-h-screen">
//         <h1 className="text-4xl font-semi-bold mb-8 text-gray-900">Checkout</h1>
//         <div className="flex flex-col md:flex-row gap-10">
//           {/* LEFT: Customer Info Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="flex-1 bg-white p-8 rounded-lg shadow-md space-y-6"
//             noValidate
//           >
//             <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">
//               Customer Information
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="flex flex-col">
//                 <label
//                   htmlFor="firstName"
//                   className="mb-2 font-medium text-gray-700"
//                 >
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   placeholder="First Name"
//                   required
//                   className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={orderInfo.firstName}
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label
//                   htmlFor="lastName"
//                   className="mb-2 font-medium text-gray-700"
//                 >
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   placeholder="Last Name"
//                   required
//                   className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={orderInfo.lastName}
//                   onChange={handleChange}
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <label
//                 htmlFor="country"
//                 className="mb-2 font-medium text-gray-700"
//               >
//                 Country
//               </label>
//               <select
//                 id="country"
//                 name="country"
//                 required
//                 className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={orderInfo.country}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Country</option>
//                 <option value="Nigeria">Nigeria</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label
//                 htmlFor="street"
//                 className="mb-2 font-medium text-gray-700"
//               >
//                 Street Address
//               </label>
//               <input
//                 type="text"
//                 id="street"
//                 name="street"
//                 placeholder="Street Address"
//                 required
//                 className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={orderInfo.street}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="city" className="mb-2 font-medium text-gray-700">
//                 Town / City
//               </label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 placeholder="Town / City"
//                 required
//                 className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={orderInfo.city}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="state" className="mb-2 font-medium text-gray-700">
//                 State / Province
//               </label>
//               <select
//                 id="state"
//                 name="state"
//                 required
//                 className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={orderInfo.state}
//                 onChange={handleChange}
//               >
//                 <option value="">Select State</option>
//                 <option value="Akwa Ibom">Akwa Ibom</option>
//                 <option value="Lagos">Lagos</option>
//                 <option value="Port Harcourt">Port Harcourt</option>
//               </select>
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="phone" className="mb-2 font-medium text-gray-700">
//                 Phone Number*
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 placeholder="Phone Number"
//                 required
//                 className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={orderInfo.phone}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="email" className="mb-2 font-medium text-gray-700">
//                 Email Address*
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email Address"
//                 required
//                 className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={orderInfo.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="notes" className="mb-2 font-medium text-gray-700">
//                 Order Notes (Optional)
//               </label>
//               <textarea
//                 id="notes"
//                 name="notes"
//                 placeholder="Order Notes (Optional)"
//                 rows={4}
//                 className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={orderInfo.notes}
//                 onChange={handleChange}
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className={`bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition w-full mt-6 flex items-center justify-center gap-3 ${
//                 loading ? "cursor-not-allowed opacity-70" : ""
//               }`}
//             >
//               {loading && <i className="fas fa-spinner fa-spin"></i>}
//               {loading ? "Processing..." : "Place Order"}
//             </button>
//           </form>

//           {/* RIGHT: Order Summary */}
//           <section
//             className="flex-1 bg-white p-8 rounded-lg shadow-md max-h-[min-content]"
//             style={{ alignSelf: "flex-start" }} // important to not stretch height
//           >
//             <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-800">
//               Your Order
//             </h2>
//             {cart.length === 0 ? (
//               <p className="text-gray-600">Your cart is empty.</p>
//             ) : (
//               <>
//                 <ul className="divide-y divide-gray-300 mb-6 max-h-[400px] overflow-y-auto">
//                   {cart.map(
//                     ({
//                       variantId,
//                       name,
//                       price,
//                       qty,
//                       image,
//                       selectedSize,
//                       selectedColor,
//                     }) => (
//                       <li
//                         key={variantId}
//                         className="flex items-center gap-4 py-3"
//                       >
//                         <img
//                           src={image || "/placeholder.png"}
//                           alt={name}
//                           className="w-16 h-16 object-cover rounded-md border border-gray-200"
//                         />
//                         <div className="flex-1">
//                           <p className="font-semibold text-gray-900">{name}</p>
//                           {(selectedSize || selectedColor) && (
//                             <p className="text-sm text-gray-500">
//                               {selectedSize && (
//                                 <span>Size: {selectedSize} </span>
//                               )}
//                               {selectedColor && (
//                                 <span>Color: {selectedColor}</span>
//                               )}
//                             </p>
//                           )}
//                           <p className="text-gray-700 mt-1">
//                             ₦{price.toLocaleString()} x {qty}
//                           </p>
//                         </div>
//                         <p className="font-semibold text-gray-900">
//                           ₦{(price * qty).toLocaleString()}
//                         </p>
//                       </li>
//                     )
//                   )}
//                 </ul>

//                 <div className="border-t pt-6 space-y-4">
//                   <div className="flex justify-between text-gray-700">
//                     <span>Subtotal:</span>
//                     <span>₦{productsTotal.toLocaleString()}</span>
//                   </div>

//                   <div className="flex justify-between items-center text-gray-700">
//                     <span>Shipping Fee:</span>
//                     <span>₦{shippingCost.toLocaleString()}</span>
//                   </div>

//                   {productsTotal >= FREE_SHIPPING_THRESHOLD && (
//                     <div>
//                       <label className="inline-flex items-center gap-3 cursor-pointer text-gray-700">
//                         <input
//                           type="checkbox"
//                           name="freeShipping"
//                           checked={orderInfo.freeShipping}
//                           onChange={handleChange}
//                           className="w-5 h-5"
//                         />
//                         <span className="text-sm">
//                           Apply Free Shipping (Orders over ₦
//                           {FREE_SHIPPING_THRESHOLD.toLocaleString()})
//                         </span>
//                       </label>
//                     </div>
//                   )}

//                   <div className="flex justify-between font-bold text-lg border-t pt-4 text-gray-900">
//                     <span>Total:</span>
//                     <span>₦{grandTotal.toLocaleString()}</span>
//                   </div>
//                 </div>
//               </>
//             )}
//           </section>
//         </div>
//       </main>
//       {/* FOOTER */}
//       <footer className="mt-14 bg-gray-900 text-gray-400 text-center text-sm py-6">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//           <p>© 2025 UnifyStore — All Rights Reserved.</p>
//           <div className="flex space-x-6 mt-3 md:mt-0">
//             <a
//               href="#"
//               className="hover:text-white transition-colors"
//               aria-label="Privacy Policy"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="hover:text-white transition-colors"
//               aria-label="Terms of Service"
//             >
//               Terms of Service
//             </a>
//             <a
//               href="#"
//               className="hover:text-white transition-colors"
//               aria-label="Contact Us"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { useCart } from "@/app/context/cartContext";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const { width, height } = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const SHIPPING_FEE = 1500;
  const FREE_SHIPPING_THRESHOLD = 50000;

  const [orderInfo, setOrderInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    street: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    notes: "",
    freeShipping: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const productsTotal = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shippingCost =
    orderInfo.freeShipping && productsTotal >= FREE_SHIPPING_THRESHOLD
      ? 0
      : SHIPPING_FEE;
  const grandTotal = productsTotal + shippingCost;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setOrderInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const orderPayload = {
      ...orderInfo,
      cart,
      total: grandTotal,
      shippingFee: shippingCost,
      freeShippingApplied: orderInfo.freeShipping,
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.error || "Failed to place order");
        setLoading(false);
        return;
      }

      setOrderId(data.orderId);
      setSubmitted(true);
      setShowConfetti(true);
      clearCart();

      setTimeout(() => setShowConfetti(false), 10000);
    } catch (error) {
      alert("Network error, try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    const shortOrderId = orderId ? orderId.slice(-6) : "";
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
        {showConfetti && <Confetti width={width} height={height} />}
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Order Received!
          </h2>
          <p className="text-lg mb-4">
            Thank you,{" "}
            <strong>
              {orderInfo.firstName} {orderInfo.lastName}
            </strong>
            . Please make a bank transfer to:
          </p>
          <p className="font-semibold text-gray-700 leading-relaxed mb-4">
            Account Name: Your Store Name
            <br />
            Bank: Your Bank Name
            <br />
            Account Number: 1234567890
            <br />
            Amount:{" "}
            <span className="text-xl">₦{grandTotal.toLocaleString()}</span>
          </p>
          <p className="font-semibold">
            Order ID:{" "}
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {shortOrderId}
            </span>
          </p>
          <p className="mt-4 text-gray-600">
            Use your order ID as reference during transfer. Shipping will begin
            within <strong>3 working days</strong>.
          </p>
          <button
            onClick={() => (window.location.href = "/shop")}
            className="mt-6 bg-green-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-800 transition"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-2 py-3">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
        Checkout
      </h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Customer Info Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-6 md:p-8 rounded-lg shadow-md space-y-6"
          noValidate
        >
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Customer Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <InputField
              label="First Name"
              name="firstName"
              value={orderInfo.firstName}
              onChange={handleChange}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={orderInfo.lastName}
              onChange={handleChange}
            />
          </div>

          <SelectField
            label="Country"
            name="country"
            value={orderInfo.country}
            onChange={handleChange}
            options={["Nigeria"]}
          />
          <InputField
            label="Street Address"
            name="street"
            value={orderInfo.street}
            onChange={handleChange}
          />
          <InputField
            label="Town / City"
            name="city"
            value={orderInfo.city}
            onChange={handleChange}
          />
          <SelectField
            label="State / Province"
            name="state"
            value={orderInfo.state}
            onChange={handleChange}
            options={["Akwa Ibom", "Lagos", "Port Harcourt"]}
          />
          <InputField
            label="Phone Number"
            name="phone"
            value={orderInfo.phone}
            onChange={handleChange}
            type="tel"
          />
          <InputField
            label="Email Address"
            name="email"
            value={orderInfo.email}
            onChange={handleChange}
            type="email"
          />
          <TextareaField
            label="Order Notes (Optional)"
            name="notes"
            value={orderInfo.notes}
            onChange={handleChange}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading && <i className="fas fa-spinner fa-spin"></i>}
            {loading ? "Processing..." : "Place Order"}
          </button>
        </form>

        {/* Order Summary */}
        <aside className="flex-1 bg-white p-6 md:p-8 rounded-lg shadow-md max-h-[min-content]">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Your Order
          </h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-300 mb-6 max-h-[400px] overflow-y-auto">
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
                    <li
                      key={variantId}
                      className="flex items-center gap-4 py-3"
                    >
                      <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 object-cover rounded-md border"
                      />
                      <div className="flex-1">
                        <p className="font-semibold truncate">{name}</p>
                        {(selectedSize || selectedColor) && (
                          <p className="text-sm text-gray-500">
                            {selectedSize && `Size: ${selectedSize} `}
                            {selectedColor && ` • Color: ${selectedColor}`}
                          </p>
                        )}
                        <p className="text-gray-700 mt-1">
                          ₦{price.toLocaleString()} x {qty}
                        </p>
                      </div>
                      <p className="font-semibold">
                        ₦{(price * qty).toLocaleString()}
                      </p>
                    </li>
                  )
                )}
              </ul>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-700">
                  Subtotal: <span>₦{productsTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  Shipping Fee: <span>₦{shippingCost.toLocaleString()}</span>
                </div>
                {productsTotal >= FREE_SHIPPING_THRESHOLD && (
                  <label className="inline-flex items-center gap-2 cursor-pointer text-gray-700">
                    <input
                      type="checkbox"
                      name="freeShipping"
                      checked={orderInfo.freeShipping}
                      onChange={handleChange}
                      className="w-5 h-5"
                    />
                    <span className="text-sm">
                      Apply Free Shipping (Orders over ₦
                      {FREE_SHIPPING_THRESHOLD.toLocaleString()})
                    </span>
                  </label>
                )}
                <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-2">
                  Total: <span>₦{grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </main>
  );
}

/* Helper Components */
function InputField({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
}

function TextareaField({ label, name, value, onChange }) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1 font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col w-full">
      <label className="mb-0.5 font-medium text-gray-700">{label}</label>
      <select
        name={name}
        required
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
