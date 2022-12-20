const {Aboutus,Member}=require("../../models")
const catchAsync=require("../../utils/catchAsync")
const AppError=require("../../utils/appError")
exports.getAboutUs = catchAsync(async(req, res, next) => {
    const aboutus = await Aboutus.findAll({
        order: [
            ["id", "ASC"]
        ]
    })
    return res.status(200).send(aboutus)
})
exports.getMembers=catchAsync(async(req,res,next)=>{
    const members=await Member.findAll({
        order:[["id","DESC"]]
    })
    return res.status(200).send(members)
})
exports.getOneMember=catchAsync(async(req,res,next)=>{
    const member=await Member.findOne({where:{member_id:req.params.id}})
    if(!member) return next(new AppError("Member not found",404))
    return res.send(member)
})