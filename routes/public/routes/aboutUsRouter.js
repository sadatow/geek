const express = require('express');
const { getAboutUs, getMembers, getOneMember } = require('../../../controllers/public/aboutUsController');
 const router = express.Router();
 router.get('/', getAboutUs);
 router.get("/members",getMembers)
 router.get("/members/:id",getOneMember)
 module.exports = router;