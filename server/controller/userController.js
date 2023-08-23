
const users = require('../model/user');


exports.userList = async (req, res) => {
    let data = await users.find()
    console.log(data)
    res.json(data)
}

exports.userAdd = async (req, res) => {
    console.log("dasfs",req.body)
    const { name, email, mobile} = req.body
    
    let data = new users({ name, email, mobile })
    let resData = await data.save()
    // Create token

    res.status(200).json({
        message: 'User added successfully',
        data: resData
    })
}

exports.userUpdate = async(req,res) =>{
    let data = await users.findOneAndUpdate ({ _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
      },
    },
    { new: true })
    res.status(200).json({
        message:"updated successfully",
        data:data
    })

}

exports.deleteUser = async(req,res) =>{
    let data = await users.deleteOne({_id:req.params.id})

    res.status(200).json({
        message:"Data Deleted",
        data:data
    })
}

