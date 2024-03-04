
import mongoose from "mongoose";

//create mongoDB database
 const mongoDBconnect = async() => {
    try {
        let connect = await mongoose.connect(process.env.MONGO_CONNECT);
    console.log(`MongoDB connect with host: ${connect.connection.host}`.bgMagenta)
    } catch (error) {
        console.log(`${error.message}`.bgRed)
    }

}

export default mongoDBconnect;