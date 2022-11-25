const nodemailer = require("nodemailer");
const sendEmail = async (receiverEmail) => {
  try {
    let transporter = nodemailer.createTransport({
      name: process.env.SERVER_NAME,
      host: process.env.HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      sendMail: true,
      auth: {
        user: process.env.SENDER_EMAIL, // generated ethereal user
        pass: process.env.SENDER_PASS, // generated ethereal password
      },
    });
    let info = await transporter.sendMail({
      from: process.env.SENDER_EMAIL, // sender address
      to: receiverEmail, // list of receivers
      subject: "Registration Successful....", // Subject line
      text: "Registration is successfully done!", // plain text body
      html: "<b>Registration is successfully done!</b>", // html body
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = sendEmail;
