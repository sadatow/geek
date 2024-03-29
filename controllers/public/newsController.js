const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');

const { News,Images,Video } = require('../../models');

exports.getAllNews=catchAsync(async(req,res,next)=>{
    const limit=req.query.limit || 20
    const offset=req.query.offset || 0
    const news=await News.findAll({
        order:[["updatedAt","DESC"]],
        limit,
        offset,
        // where:{isActive:true},
        include:[{
            model:Images,
            as:"images",
            attributes:["image_id","image"]
        },
        {
            model:Video,
            as:"video"
        }
    ],
    })
    return res.send(news)
})
exports.getOneNews=catchAsync(async(req,res,next)=>{
    const news=await News.findOne({
        where:{news_id:req.params.id},
        include:[{
            model:Images,
            as:"images"
        },
        {
            model:Video,
            as:"video"
        }
    ]
    })
    if(!news) return next(new AppError("News not found",404))
    return res.send(news)
})