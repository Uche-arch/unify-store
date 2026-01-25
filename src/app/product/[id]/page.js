// import { connectDB } from "@/app/lib/mongodb";
// import Product from "@/app/models/Product";
// import ProductPageClient from "./ProductPageClient";

// export default async function ProductPage({ params }) {
//   await connectDB();
//   const product = await Product.findById(params.id).lean();

//   if (!product) {
//     return <p className="p-6">Product not found.</p>;
//   }

//   // Convert _id to string to avoid serialization issues
//   product._id = product._id.toString();

//   return <ProductPageClient product={product} />;
// }

export const dynamic = "force-dynamic";

import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import ProductPageClient from "./ProductPageClient";

// This function fetches the product data specifically for SEO
export async function generateMetadata({ params }) {
  const { id } = params;
  
  // Fetch your product from your database/API
  // const product = await getProduct(id); // Replace with your actual fetch logic
  const product = await Product.findById(params.id).lean();


  if (!product) {
    return { title: "Product Not Found | UnifyStore" };
  }

  return {
    title: `${product.name} - Buy Online`,
    description: `Get this premium ${product.name} for only ₦${product.price.toLocaleString()}. Available now at UnifyStore with fast delivery.`,
    openGraph: {
      images: [product.images?.[0]],
    },
  };
}

export default async function ProductPage({ params }) {
  await connectDB();

  const product = await Product.findById(params.id).lean();
  if (!product) return <p className="p-6">Product not found.</p>;

  // Fix serialization
  product._id = product._id.toString();

  // // Fetch related products (same category)
  // const related = await Product.find({
  //   category: product.category,
  //   _id: { $ne: product._id },
  // })
  //   .limit(8)
  //   .lean();

  // const safeRelated = related.map((p) => ({
  //   ...p,
  //   _id: p._id.toString(),
  // }));

  // Fetch related products (same category)
  const related = await Product.find({
    category: product.category,
    _id: { $ne: product._id },
  }).lean();

  // Shuffle randomly (all products)
  const shuffledRelated = related.sort(() => Math.random() - 0.5);

  const safeRelated = shuffledRelated.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));

  return <ProductPageClient product={product} related={safeRelated} />;
}
