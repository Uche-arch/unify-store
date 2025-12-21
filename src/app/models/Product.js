// import mongoose from "mongoose";

// const ProductSchema = new mongoose.Schema(
//   {
//     name: String,
//     price: Number,
//     oldPrice: Number,
//     description: String,
//     images: [String],
//     category: String,
//     popular: { type: Boolean, default: false }, // ⭐ Added
//     sizes: [String], // NEW
//     colors: [String], // NEW
//   },
//   { timestamps: true }
// );

// export default mongoose.models.Product ||
//   mongoose.model("Product", ProductSchema);


import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    oldPrice: Number,
    description: String,
    images: [String],
    category: String,
    popular: { type: Boolean, default: false },
    sizes: [String],
    colors: [String],

    // ✅ NEW
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
