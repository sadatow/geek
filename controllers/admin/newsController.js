const sharp = require('sharp');
const fs = require('fs');
const AppError = require('../../utils/appError');
const catchAsync = require('../../utils/catchAsync');
const {v4}=require("uuid")
const { News,Images  } = require('../../models');

exports.getAllNews=catchAsync(async(req,res,next)=>{
    const limit=req.query.limit || 20
    const offset=req.query.offset || 0
    const news=await News.findAndCountAll({
        order:[["updatedAt","DESC"]],
        limit,
        offset,
        
    })
    return res.send(news)
})
exports.addNews=catchAsync(async(req,res,next)=>{
    const news=await News.create(req.body);
    return res.status(201).send(news)
})
exports.editNews=catchAsync(async(req,res,next)=>{
    const news=await News.findOne({where:{news_id:req.params.id}})
    if(!news) return next(new AppError("News not found",404))
    await news.update(req.body)
    return res.send(news)
})
exports.deleteNews=catchAsync(async(req,res,next)=>{
    const news=await News.findOne({where:{news_id:req.params.id}})
    if(!news) return next(new AppError("News not found",404))
    const images=await Images.findOne({where:{newsId:news.id}})
    for (let i=0;i<images.length;i++) {

        fs.unlink(`static/${images[i].image}`, function(err) {
            if (err) throw err;
        })
    }
    await Images.destroy({where:{newsId:news.id}})
    await news.destroy()
    return res.send("Success")
})
exports.uploadImages=catchAsync(async(req,res,next)=>{
    const news_id = req.params.id;
    const news = await News.findOne({ where: { news_id } });
    let imagesArray = []
    req.files = Object.values(req.files)
    req.files = intoArray(req.files)
    if (!news)
        return next(new AppError('News did not found with that ID', 404));
    for (const images of req.files) {
        const image_id = v4()
        const image = `${image_id}_news.webp`;
        const photo = images.data
        let buffer = await sharp(photo).webp().toBuffer()
        await sharp(buffer).toFile(`static/${image}`);
        await Images.destroy({where:{newsId:news.id}})
        let newImage = await Images.create({ image, image_id, newsId: news.id })
        imagesArray.push(newImage)
    }
    return res.status(201).send(imagesArray);
})
exports.deleteNewsImage = catchAsync(async(req, res, next) => {
    const image = await Images.findOne({ where: { image_id: req.params.id } })

    fs.unlink(`static/${image.image}`, function(err) {
        if (err) throw err;
    })
    await image.destroy()
    return res.status(200).send({ msg: "Sucess" })

})
const intoArray = (file) => {
    if (file[0].length == undefined) return file
    else return file[0]
}