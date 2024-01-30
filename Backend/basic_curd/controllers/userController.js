import User from "../models/userModels.js"


export const viewUsers = async (req, res) => {
    try {
        const users = await User.find()
        if(users.length === 0) {
            return res.status(404).json({
                message: "Users not found!"
            })
        }
            return res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

export const addUser = async (req, res) => {
    try{

        const userData =  new  User(req.body)
        const {email} =  userData
        const userExsit = await User.findOne({email})
        if(!userExsit) {
            const savedUser = await userData.save()
            return res.status(200).json({
                status: true,
                message: "User has been registered!",
                data: savedUser
            })
        }else{
            return res.status(400).json({
                status: false,
                message: "User already exist!",
            }) 
        }

    } catch(error) {
        res.status(500).json({error: "Internal server error"})
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const existUser = await User.findOne({_id: id})
        if(!existUser) {
            return res.status(404).json({
                status: false,
                message: "User not found!"
            })
        }
        const updateUserData = await User.findByIdAndUpdate(id, req.body, {new: true})
        res.status(201).json(updateUserData)
        
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const existUser = await User.findOne({_id: id})
        if(!existUser) {
            return res.status(404).json({
                status: false,
                message: "User not found!"
            })
        }
        await User.findByIdAndDelete(id)
        res.status(201).json({
            status: false,
            message: "User has been deleted!"
        })
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
}