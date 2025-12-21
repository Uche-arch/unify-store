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


import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import ProductPageClient from "./ProductPageClient";

export default async function ProductPage({ params }) {
  await connectDB();

  const product = await Product.findById(params.id).lean();
  if (!product) return <p className="p-6">Product not found.</p>;

  // Fix serialization
  product._id = product._id.toString();

  // Fetch related products (same category)
  const related = await Product.find({
    category: product.category,
    _id: { $ne: product._id },
  })
    .limit(8)
    .lean();

  const safeRelated = related.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));

  return <ProductPageClient product={product} related={safeRelated} />;
}
