const express = require('express');
const { addProject, editProject, deleteProject,uploadProjectImage } = require('../../../controllers/admin/projectsController');
const { getAllProjects, getOneProject } = require('../../../controllers/public/projectsController');
const router = express.Router();

router.get('/', getAllProjects);
router.get("/:id",getOneProject)
router.post('/add', addProject);
router.patch("/:id", editProject)
router.delete('/:id', deleteProject);
router.post('/upload-image/:id', uploadProjectImage);

module.exports = router;