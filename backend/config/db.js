import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://tushar:tushar8826@cluster0.xt95pkr.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}
