const nodemailer = require("nodemailer");

const sendEmail = async (userEmail)=>{
    let testAccount = await nodemailer.createTestAccount();

    // connect with the smtp
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'adolfo.kuhlman@ethereal.email', // this field can be different
            pass: 'kHQHE4k6sQeVdNgfdM' // this field can be different, Ethereal
        },
      });

      // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Bunty 👻" <bunty1@example.com>', // sender address
        // to: "bar@example.com, baz@example.com", // list of receivers
        to: userEmail, // list of receivers
        subject: "Testing mail", // Subject line
        text: "Hello world?", // plain text body
        html: `
            <b>Hi this is bunty</b> <br> 
            ${userEmail}
            <br>
            Email verified.
            <a href="http://localhost:5000/login" target="_blank">Click here to Login!</a>
        `, // html body
    });
}

module.exports = sendEmail;