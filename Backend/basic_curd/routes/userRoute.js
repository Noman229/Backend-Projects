import express from "express"
import { addUser, viewUsers, updateUser, deleteUser } from "../controllers/userController.js"

const userRoute = express.Router()



userRoute.get("/fetch", viewUsers)
userRoute.post("/add", addUser)
userRoute.put("/update/:id", updateUser)
userRoute.delete("/delete/:id", deleteUser)




export default userRoute 