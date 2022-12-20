const sharp=require("sharp")
const fs=require("fs")
const {Aboutus,Member}=require("../../models")
const catchAsync=require("../../utils/catchAsync")
const AppError=require("../../utils/appError")
exports.editAboutUs = catchAsync(async(req, res, next) => {
    const first=req.body[0]
    const second=req.body[1]
    const one = await Aboutus.findOne({ where: { id: 1 } })
    await one.update(first)
    const two = await Aboutus.findOne({ where: { id: 2 } })
    await two.update(second)
    return res.status(200).send({ one, two })
})
exports.uploadAboutUsImage=catchAsync(async(req,res,next)=>{
    const id=req.params.id
    const one=await Aboutus.findOne({ where: {id}})
    const image = `${one.id}_about.webp`;
    req.files = Object.values(req.files)
    const photo = req.files[0].data
    let buffer = await sharp(photo).webp().toBuffer()
    await sharp(buffer).toFile(`static/${image}`);
    await one.update({
        image,
    });
    res.send(one)
})
exports.addMember=catchAsync(async(req,res,next)=>{
    const member=await Member.create(req.body)
    return res.status(201).send(member)
})
exports.editMember=catchAsync(async(req,res,next)=>{
    const member=await Member.findOne({where:{member_id:req.params.id}})
    if(!member) return next(new AppError("Member not found",404))
    await member.update(req.body)
    return res.send(member)
})
exports.uploadMemberImage = catchAsync(async(req, res, next) => {
    const member = await Member.findOne({ where: { member_id:req.params.id } });
    req.files = Object.values(req.files)
    if (!member)
        return next(new AppError('Banner did not found with that ID', 404));
    const image = `${member.member_id}_member.webp`;
    const photo = req.files[0].data
    let buffer = await sharp(photo).webp().toBuffer()
    await sharp(buffer).toFile(`static/${image}`);

    await member.update({
        image,
    });
    return res.status(201).send(member);
});
exports.deleteMember=catchAsync(async(req,res,next)=>{
    const member=await Member.findOne({where:{member_id:req.params.id}})
    if(!member) return next(new AppError("Member not found",404))
    if(member.image){
        fs.unlink(
            `static/${member.image}`,
            function(err) {
                if (err) throw err;
            }
        ); 
    }
    await member.destroy()
    return res.send("Sucess")
})