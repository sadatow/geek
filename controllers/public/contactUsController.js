const { sendEmail } = require('../../utils/email');
const catchAsync = require('../../utils/catchAsync');
const {Mailers}=require("../../models")

exports.sendMyMail = catchAsync(async (req, res) => {
  await sendEmail(req.body);
  await Mailers.create(req.body)
  res.status(200).json({
    msg: 'Sizin hatynyz kabul edildi',
  });
});
