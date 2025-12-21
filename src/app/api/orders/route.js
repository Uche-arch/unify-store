import { connectDB } from "@/app/lib/mongodb";
import Order from "@/app/models/Order";
import Product from "@/app/models/Product";


export async function GET() {
  try {
    await connectDB();

    const orders = await Order.find().sort({ createdAt: -1 }).lean();

    const safeOrders = orders.map((order) => ({
      ...order,
      _id: order._id.toString(),
      createdAt: order.createdAt?.toISOString() || null,
    }));

    return new Response(JSON.stringify(safeOrders), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();

    // Validate required fields (you can expand this)
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.cart ||
      !data.total
    ) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    for (const item of data.cart) {
      const product = await Product.findById(item._id);

      if (!product) {
        return new Response(JSON.stringify({ error: "Product not found" }), {
          status: 400,
        });
      }

      if (item.qty > product.stock) {
        return new Response(
          JSON.stringify({
            error: `Only ${product.stock} left for ${product.name}`,
          }),
          { status: 400 }
        );
      }

      // ✅ Deduct stock
      product.stock -= item.qty;
      await product.save();
    }


    const newOrder = new Order({
      customer: {
        firstName: data.firstName,
        lastName: data.lastName,
        country: data.country,
        street: data.street,
        city: data.city,
        state: data.state,
        phone: data.phone,
        email: data.email,
        notes: data.notes || "",
      },
      cart: data.cart,
      total: data.total,
      shippingFee: data.shippingFee,
      freeShippingApplied: data.freeShippingApplied || false,
      status: "pending", // you can expand statuses
      createdAt: new Date(),
    });

    await newOrder.save();

    return new Response(
      JSON.stringify({
        message: "Order saved successfully",
        orderId: newOrder._id.toString(),
      }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
