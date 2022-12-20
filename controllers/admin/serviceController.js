const sharp = require('sharp');
const fs = require('fs');
const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');

const { Service  } = require('../../models');

exports.addService = catchAsync(async(req, res, next) => {
    const newService = await Service.create(req.body);
    return res.status(201).send(newService);
});
exports.editService = catchAsync(async(req, res, next) => {
    const updateservice = await Service.findOne({where:{ service_id: req.params.id }})
    console.log(req.body)
    if (!updateservice)
        return next(new AppError("Work with that id not found"), 404)
    await updateservice.update(req.body)
    return res.status(200).send(updateservice)
})
exports.getOneService=catchAsync(async(req,res,next)=>{
    const service=await Service.findOne({where:{service_id:req.params.id}})
    if(!service) 
        return next(new AppError("Service with that id not found"), 404)
    return res.send(service)
})
exports.uploadServiceImage = catchAsync(async(req, res, next) => {
    const service = await Service.findOne({ where: { service_id:req.params.id } });
    req.files = Object.values(req.files)

    if (!service)
        return next(new AppError('Banner did not found with that ID', 404));
    const image = `${service.service_id}_service.webp`;
    const photo = req.files[0].data
    let buffer = await sharp(photo).webp().toBuffer()
    await sharp(buffer).toFile(`static/${image}`);

    await service.update({
        image,
    });
    return res.status(201).send(service);
});
exports.deleteService = catchAsync(async(req, res, next) => {
    const service = await Service.findOne({ where: { service_id:req.params.id } });
    if (!service)
        return next(new AppError('Service did not found with that ID', 404));
    if (service.image) {
        fs.unlink(`static/${service.service_id}_service.webp`, function(err) {
            if (err) throw err;
        });
    }
    await service.destroy();

    return res.status(200).send('Successfully Deleted');
});