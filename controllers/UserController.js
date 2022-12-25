const User = require('../models/User');

async function insertOne(req,res){
    const firstname= req.body.first_name;
    const lastname = req.body.last_name;

    try{
        const user = await User.create({first_name:firstname,last_name:lastname});
        res.status(200).json({
            status:"success",
            data:user,
            message: "User created successfully",
        });
    }catch (e) {

    }
}


module.exports = {insertOne};