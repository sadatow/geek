const express = require('express');
const { getAllProjects, getOneProject } = require('../../../controllers/public/projectsController');
const router = express.Router();

router.get('/', getAllProjects);
router.get("/:id",getOneProject)

module.exports = router;