const express = require('express');
const router = express.Router()
const { getMainpage } = require('../../../controllers/public/mainControllers');
router.get("/", getMainpage)
module.exports = router;