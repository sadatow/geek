const express = require('express');
const { getAllServices } = require('../../../controllers/public/serviceController');

const router = express.Router();
router.get('/', getAllServices);
module.exports = router;