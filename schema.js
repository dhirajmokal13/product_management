import Mongoose from "mongoose";
const productShema = new Mongoose.Schema({
    pname: { type: String, required: true, trim: true },
    pprice: { type: Number, required: true, trim: true },
    pdesc: { type: String, required: true, trim: true },
    dt: { type: Date, default: Date.now },
});

const product = Mongoose.model("product", productShema);
export default product;