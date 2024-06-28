import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://biruly:Biruly23@dgbshop.l4tbibb.mongodb.net/", {
      dbName: "Blurock-Innovations", // MongoDB database name
    })
    .then(() => console.log("ERP solution database connected."))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};
