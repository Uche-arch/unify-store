

// "use client"

// import { connectDB } from "./lib/mongodb";
// import Product from "./models/Product";
// import ProductCard from "./components/ProductCard";
// import { useCart } from "@/app/context/cartContext";

// export default async function HomePage() {
//   const { cart } = useCart();

//   const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

//   await connectDB();

//   // Fetch sections
//   const hotSales = await Product.find({
//     oldPrice: { $exists: true, $ne: null },
//   })
//     .sort({ createdAt: -1 })
//     .limit(6)
//     .lean();

//   const popularProducts = await Product.find({ popular: true })
//     .sort({ createdAt: -1 })
//     .lean();

//   // Convert to plain JSON-safe format
//   function clean(products) {
//     return products.map((p) => ({
//       ...p,
//       _id: p._id.toString(),
//       createdAt: p.createdAt?.toISOString(),
//       updatedAt: p.updatedAt?.toISOString(),
//     }));
//   }

//   return (
//     <main className="max-w-6xl mx-auto p-6">
//       {/* HEADER */}
//       <header className="flex justify-between items-center mb-10">
//         <h1 className="text-2xl font-bold">UnifyStore</h1>
//         <nav className="flex gap-6 text-lg">
//           <a href="/shop">
//             <i class="fas fa-bag-shopping"></i> Shop
//           </a>
//           <a href="/cart" className="relative">
//             <i class="fas fa-shopping-cart"></i> Cart
//             {/* Notification Badge */}
//             {totalQty > 0 && (
//               <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                 {totalQty}
//               </span>
//             )}
//           </a>
//         </nav>
//       </header>

//       {/* HERO */}
//       <section className="bg-gray-900 text-white p-10 rounded-lg mb-10 text-center">
//         <h2 className="text-4xl font-bold mb-4">
//           Elevate Your Style With Premium Fashion
//         </h2>
//         <p className="text-gray-300 text-lg">
//           Discover trendy wear, quality materials, & timeless outfits.
//         </p>
//       </section>

      // {/* FEATURES */}
      // <section className="grid grid-cols-2 sm:grid-cols-4 gap-5 text-center mb-14">
      //   <div className="p-4 bg-gray-100 rounded-lg font-medium">
      //     <i class="fas fa-lock"></i>
      //     <br />
      //     Secured Payment
      //   </div>
      //   <div className="p-4 bg-gray-100 rounded-lg font-medium">
      //     <i class="fas fa-truck"></i>
      //     <br />
      //     Free Shipping
      //   </div>
      //   <div className="p-4 bg-gray-100 rounded-lg font-medium">
      //     <i class="fas fa-box"></i> <br />
      //     Delivered With Care
      //   </div>
      //   <div className="p-4 bg-gray-100 rounded-lg font-medium">
      //     <i class="fas fa-star"></i> <br />
      //     Excellent Service
      //   </div>
      // </section>

//       {/* HOT SALES */}
//       <section className="mb-12">
//         <h3 className="text-3xl font-bold mb-6">
//           <i class="fas fa-fire"></i> Hot Sales
//         </h3>

//         {hotSales.length === 0 && <p>No discounted products yet.</p>}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {clean([...hotSales].sort(() => Math.random() - 0.5)).map(
//             (product) => (
//               <ProductCard key={product._id} product={product} />
//             )
//           )}
//         </div>
//       </section>

      // {/* FLASH SALES HERO */}
      // <section className="bg-red-600 text-white p-10 rounded-lg mb-14 text-center">
      //   <h2 className="text-3xl font-bold mb-4">
      //     FLASH SALES!! Enjoy 50% Off Selected Items
      //   </h2>
      //   <a
      //     href="/shop"
      //     className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-lg"
      //   >
      //     Shop Now
      //   </a>
      // </section>

//       {/* POPULAR PRODUCTS */}
//       <section className="mb-12">
//         <h3 className="text-3xl font-bold mb-6">
//           <i class="fas fa-star"></i> Popular Products
//         </h3>

//         {popularProducts.length === 0 && <p>No popular products yet.</p>}

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {clean(popularProducts).map((product) => (
//             <ProductCard key={product._id} product={product} />
//           ))}
//         </div>
//       </section>

      // {/* SOCIALS */}
      // <section className="mt-16 text-right">
      //   <p className="text-lg font-semibold">Follow Us</p>
      //   <div className="flex justify-end gap-4 mt-2">
      //     <a href="#">Instagram</a>
      //     <a href="#">Twitter</a>
      //     <a href="#">Facebook</a>
      //   </div>
      // </section>

//       {/* FOOTER */}
//       <footer className="mt-14 text-center text-sm text-gray-600">
//         © 2025 UnifyStore — All Rights Reserved.
//       </footer>
//     </main>
//   );
// }

export const dynamic = "force-dynamic";


import { connectDB } from "./lib/mongodb";
import Product from "./models/Product";
import HomePageClient from "./HomePageClient";

export default async function HomePage() {
  await connectDB();

  const hotSales = await Product.find({
    oldPrice: { $exists: true, $ne: null },
  })
    .sort({ createdAt: -1 })
    .limit(6)
    .lean();

  const popularProducts = await Product.find({ popular: true })
    .sort({ createdAt: -1 })
    .lean();

  function clean(products) {
    return products.map((p) => ({
      ...p,
      _id: p._id.toString(),
    }));
  }

  return (
    <HomePageClient
      hotSales={clean(hotSales)}
      popularProducts={clean(popularProducts)}
    />
  );
}
