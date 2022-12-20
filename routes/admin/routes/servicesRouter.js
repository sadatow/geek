const express = require('express');
const { getOneService, addService, uploadServiceImage, editService, deleteService } = require('../../../controllers/admin/serviceController');
const { getAllServices } = require('../../../controllers/public/serviceController');

const router = express.Router();
router.get('/', getAllServices);
router.get("/:id", getOneService)
router.post('/add', addService);
router.post("/upload-image/:id", uploadServiceImage)
router.patch('/:id', editService);
router.delete('/:id', deleteService);

module.exports = router;