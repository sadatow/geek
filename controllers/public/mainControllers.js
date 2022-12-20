const {Mainpage}=require("../../models")
const catchAsync=require("../../utils/catchAsync")

exports.getMainpage=catchAsync(async (req, res,next)=>{
    const mainpage=await Mainpage.findOne()
    return res.send(mainpage)
})