 const express = require('express');
 const {editAboutUs, editMember, deleteMember, addMember, uploadMemberImage, uploadAboutUsImage } = require('../../../controllers/admin/aboutUsController');
const { getAboutUs, getMembers, getOneMember } = require('../../../controllers/public/aboutUsController');
 const router = express.Router();
 router.get('/', getAboutUs);
 router.patch('/', editAboutUs);
 router.post("/upload-image/:id",uploadAboutUsImage)
 router.post("/members/add",addMember)
 router.get("/members",getMembers)
 router.get("/members/:id",getOneMember)
 router.patch("/members/:id",editMember)
 router.delete("/members/:id",deleteMember)
 router.post("/members/upload-image/:id",uploadMemberImage)
 module.exports = router;