export const dynamic = "force-dynamic";

import { connectDB } from "@/app/lib/mongodb";
import Product from "@/app/models/Product";
import { verifyAdmin } from "@/app/lib/verifyAdmin";

export async function GET(req, { params }) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);

    if (!product) return Response.json({ error: "Not found" }, { status: 404 });

    return Response.json(product, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  if (!verifyAdmin(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    const data = await req.json();

    const updated = await Product.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return Response.json(updated, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  if (!verifyAdmin(req)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    await Product.findByIdAndDelete(params.id);

    return Response.json({ message: "Product deleted" }, { status: 200 });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
