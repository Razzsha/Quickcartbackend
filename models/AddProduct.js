import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
            enum: [
                "clothes",
                "watch",
                "jewellery",
                "shoe",
                "earbuds",
                "accessories",
            ],
        },

        price: {
            type: Number,
            required: true,
        },

        offerPrice: {
            type: Number,
            required: true,
        },

        images: {
            type: [String], // store image URLs or filenames
            required: true,
        },

    },
    { timestamps: true } // adds createdAt & updatedAt
);

const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;