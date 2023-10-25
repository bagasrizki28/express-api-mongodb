import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a produk name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

const product = mongoose.model("Product", productSchema);

export default product;
