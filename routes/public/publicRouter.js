const express = require('express')
const router = express.Router()
const {sendMyMail}=require("../../controllers/public/contactUsController")

router.post("/contact-us",sendMyMail)
router.use("/about-us",  require("./routes/aboutUsRouter"))
router.use('/services', require('./routes/servicesRouter')); //delete test etmeli
router.use("/news", require("./routes/newsRouter")) //test edildi
router.use("/main", require("./routes/mainRouter"))
router.use("/projects", require("./routes/projectsRouter"))

module.exports = router