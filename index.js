const nodemailer = require('nodemailer');

const tranporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "meuemail@gmail.com",
        pass: "senha de app do gmail "
    }
});

tranporter.sendMail({
    from: "meuemail@gmail.com",
    to: "quemvaireceber@gmail.com",
    subject: "Mensage title",
    text: "Ola teste enviando emails",
    html: "<p>Html teste </p>"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})