const express = require('express')
const router = express.Router()
const { login, protect, updateMe, sendMe } = require("../../controllers/admin/adminControllers")
router.post("/login", login)
router.post("/edit", protect, updateMe)
router.get("/get-me", protect, sendMe)
router.use("/about-us",  require("./routes/aboutUsRouter")) //upload image galdy
router.use('/services', require('./routes/servicesRouter')); //complete
router.use("/news", require("./routes/newsRouter")) //test edildi
router.use("/main",protect, require("./routes/mainRouter"))
router.use("/projects", require("./routes/projectsRouter"))
router.use("/mail",require("./routes/mailRouter"))

module.exports = router