const express = require('express');
const { getOneNews,getAllNews }=require("../../../controllers/public/newsController")
const router = express.Router();
router.get("/",getAllNews)
router.get("/:id",getOneNews )
module.exports = router;