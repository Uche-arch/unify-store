import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: {
    firstName: String,
    lastName: String,
    country: String,
    street: String,
    city: String,
    state: String,
    phone: String,
    email: String,
    notes: String,
  },
  cart: [
    {
      _id: String,
      name: String,
      price: Number,
      qty: Number,
      image: String,
      selectedSize: String, // add this
      selectedColor: String, // add this
    },
  ],
  total: Number,
  shippingFee: Number,
  freeShippingApplied: Boolean,
  status: {
    type: String,
    default: "pending",
  },
  createdAt: Date,
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
