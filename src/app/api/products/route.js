import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import { verifyAdmin } from "@/app/lib/verifyAdmin";

// export async function GET() {
//   try {
//     await connectDB();
//     // const products = await Product.find().sort({ createdAt: -1 });

//     // ✅ Only products with stock > 0
//     const products = await Product.find({ stock: { $gt: 0 } }).sort({
//       createdAt: -1,
//     });

//     return Response.json(products, { status: 200 });
//   } catch (err) {
//     return Response.json({ error: err.message }, { status: 500 });
//   }
// }

export async function GET() {
  try {
    await connectDB();

    // ✅ RETURN EVERYTHING
    const products = await Product.find().sort({ createdAt: -1 });

    return Response.json(products, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    if (!verifyAdmin(req)) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();
    const newProduct = await Product.create(body);

    return Response.json(newProduct, { status: 201 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
