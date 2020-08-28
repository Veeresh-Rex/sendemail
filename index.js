const nodeMailer = require('nodemailer');
const transport = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'mauryaveeresh@gmail.com',
    pass: '@veer85771407@',
  },
});
var mailOptions = {
  from: 'mauryaveeresh@gmail.com',
  to: 'mauryaveer2001@gmail.com',
  subject: 'testing node mail',
  // cc: ,
  replyTo: 'test@gmail.com',
  date: new Date('2000-01-01 00:00:00'),
  text: 'This is for testing purpose Email send  tetst3 ',
};
transport.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.warn(err);
  } else console.warn('Email send successfully');
});
