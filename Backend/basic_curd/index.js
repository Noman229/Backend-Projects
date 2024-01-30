import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js";

const app = express();
app.use(express.json())
dotenv.config();

const PORT = process.env.PORT
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then( () => {
    console.log("Database has been connected!")
}).catch (error => console.log(error));

app.listen(PORT, () => {
    console.log("Server is runnig...")
})



app.use("/api/user", userRoute)