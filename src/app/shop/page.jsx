// import { connectDB } from "@/app/lib/mongodb";
// import Product from "@/app/models/Product";
// import ProductCard from '@/app/components/ProductCard';

// export default async function HomePage() {
//   await connectDB();
//   const products = await Product.find().sort({ createdAt: -1 }).lean();

//   // Convert _id from ObjectId/Buffer to string and remove any other non-serializable fields
//   const safeProducts = products.map((product) => ({
//     ...product,
//     _id: product._id.toString(),
//     createdAt: product.createdAt ? product.createdAt.toISOString() : null,
//     updatedAt: product.updatedAt ? product.updatedAt.toISOString() : null,
//   }));

//    return (
//      <main className="max-w-6xl mx-auto p-6">
//        <h1 className="text-3xl font-bold mb-6">Welcome to My Store</h1>

//        {safeProducts.length === 0 && <p>No products found.</p>}

//        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//          {safeProducts.map((product) => (
//            <ProductCard key={product._id} product={product} />
//          ))}
//        </div>
//      </main>
//    );
// }


import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import ShopPageClient from "./ShopPageClient";

export default async function HomePage() {
  await connectDB();
  const products = await Product.find().sort({ createdAt: -1 }).lean();

  const safeProducts = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
    createdAt: product.createdAt ? product.createdAt.toISOString() : null,
    updatedAt: product.updatedAt ? product.updatedAt.toISOString() : null,
  }));

  return <ShopPageClient products={safeProducts} />;
}
