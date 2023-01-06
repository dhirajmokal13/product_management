import mongoose from "mongoose";

const conn = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
           useNewUrlParser: true,
           useUnifiedTopology: true,
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Successfully");
    } catch(err){
        console.log(err);
    }
};

export default conn;