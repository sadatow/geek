const express = require('express');
const router = express.Router()
const { editMainpage } = require("../../../controllers/admin/mainControllers");
const { getMainpage } = require('../../../controllers/public/mainControllers');
router.get("/", getMainpage)
router.patch("/", editMainpage)
module.exports = router;