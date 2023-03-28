const nodemailer = require("nodemailer");
transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prajwali@valueaddsofttech.com",
    pass: "",
  },
});
const mailConfigurations = {
  // It should be a string of sender email
  from: "prajwali@valueaddsofttech.com",

  // Comma Separated list of mails
  to: "ingaleprajawal@gmail.com",

  // Subject of Email
  subject: "Sending Email using Node.js",

  // This would be the text of email body
  text:
    "Hi! There, You know I am using the" +
    " NodeJS Code along with NodeMailer " +
    "to send this email.",
};

transporter.sendMail(mailConfigurations, function (error, info) {
  if (error) throw Error(error);
  console.log("Email Sent Successfully");
  console.log(info);
});
