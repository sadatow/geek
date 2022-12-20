const catchAsync = require('../../utils/catchAsync');
const { Service  } = require('../../models');

exports.getAllServices=catchAsync(async(req,res,next)=>{
    const service=await Service.findAll({
        order:[[
            "id","DESC"
        ]]
    })
    return res.send(service)
})