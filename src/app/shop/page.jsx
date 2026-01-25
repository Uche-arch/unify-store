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


export const metadata = {
  title: "Shop All Shoes & Bags | UnifyStore Collection",
  description: "Browse our full catalog of premium footwear and designer handbags. From trendy sneakers to elegant office bags, find the perfect match for your style at UnifyStore Nigeria.",
  keywords: "buy shoes online, designer bags shop, sneakers collection, latest handbags, UnifyStore catalog",
  openGraph: {
    title: "Shop the Best Shoes & Bags at UnifyStore",
    description: "Explore our latest arrivals in footwear and accessories. Fast delivery across Nigeria.",
    type: "website",
  },
};

export const dynamic = "force-dynamic";


import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import ShopPageClient from "./ShopPageClient";

export default async function HomePage() {
  try {
    await connectDB();
    
    // Fetch products
    const products = await Product.find().sort({ createdAt: -1 }).lean();

    // 1. FIXED THE SHUFFLE: 
    // You were shuffling the array but still mapping the ORIGINAL 'products' array.
    // Also, using [...products] ensures you don't mutate the original data unexpectedly.
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5);

    // 2. DATA SERIALIZATION:
    // We use 'shuffledProducts' here so the random order actually reaches the UI.
    const safeProducts = shuffledProducts.map((product) => ({
      ...product,
      _id: product._id.toString(),
      createdAt: product.createdAt ? product.createdAt.toISOString() : null,
      updatedAt: product.updatedAt ? product.updatedAt.toISOString() : null,
    }));

    return <ShopPageClient products={safeProducts} />;
    
  } catch (error) {
    console.error("Database error:", error);
    // Return an empty array or a friendly error UI so the whole site doesn't crash
    return <ShopPageClient products={[]} />;
  }
}