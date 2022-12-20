const sharp = require('sharp');
const fs = require('fs');
const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');
const {Projects}=require("../../models")

exports.addProject=catchAsync(async(req,res,next)=>{
    const project=await Projects.create(req.body)
    return res.status(201).send(project)
})
exports.editProject=catchAsync(async(req,res,next)=>{
    const project=await Projects.findOne({where:{project_id:req.params.id}})
    if(!project) return next(new AppError("Project not found",404))
    await project.update(req.body)
    return res.send(project)
})
exports.deleteProject=catchAsync(async(req,res,next)=>{
    const project=await Projects.findOne({where:{project_id:req.params.id}})
    if(!project) return next(new AppError("Project not found",404))
    if(project.image){
        fs.unlink(
            `static/${project.image}`,
            function(err) {
                if (err) throw err;
            }
        ); 
    }
    await project.destroy()
    return res.send("Sucess")
})
exports.uploadProjectImage = catchAsync(async(req, res, next) => {
    const project = await Projects.findOne({ where: { project_id:req.params.id } });
    req.files = Object.values(req.files)
    if (!project)
        return next(new AppError('Project did not found with that ID', 404));
    const image = `${project.project_id}_project.webp`;
    const photo = req.files[0].data
    let buffer = await sharp(photo).webp().toBuffer()
    await sharp(buffer).toFile(`static/${image}`);

    await project.update({
        image,
    });
    return res.status(201).send(project);
});