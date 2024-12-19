import mongoose from "mongoose";
mongoose.set('strictQuery', false);
// Connect to database
const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
    console.log(`MongoDB Database connected with host: ${con.connection.host}`);
  });
};

export default connectDatabase;
