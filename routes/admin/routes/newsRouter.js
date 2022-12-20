const express = require('express');
const {getAllNews, addNews, editNews, deleteNews, uploadImages, deleteNewsImage} = require('../../../controllers/admin/newsController');
const { getOneNews }=require("../../../controllers/public/newsController")
const router = express.Router();
router.get("/",getAllNews)
router.get("/:id",getOneNews )
router.post('/add', addNews);
router.patch('/:id', editNews);
router.delete('/:id', deleteNews);
router.post("/upload-image/:id",uploadImages)
router.delete("/image/:id",deleteNewsImage)
module.exports = router;