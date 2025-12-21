import { connectDB } from "@/app/lib/mongodb";
import Order from "@/app/models/Order";

export async function PATCH(req, { params }) {
  const { id } = params;

  try {
    await connectDB();

    const { status } = await req.json();
    if (!status) {
      return new Response(JSON.stringify({ error: "Missing status" }), {
        status: 400,
      });
    }

    const order = await Order.findById(id);
    if (!order) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
      });
    }

    order.status = status;
    await order.save();

    return new Response(
      JSON.stringify({ message: "Order status updated", status: order.status }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
