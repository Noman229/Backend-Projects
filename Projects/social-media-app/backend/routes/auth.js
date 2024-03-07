const router = require('express').Router();
const User = require('../modules/User');
const bcrypt = require('bcrypt');



// Register New User
router.post('/register', async(req, res) => {
    try{
        // Generate Bcrypt Password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Create New User
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword,
            desc: req.body.desc
        })

        // Save User & Retrun Respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})


// Login User
router.post('/login', async(req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(404).json('User not found!');

        const passwordValidation = await bcrypt.compare(req.body.password, user.password);
        !passwordValidation && res.status(404).json('Wrong password!');

        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})


module.exports = router