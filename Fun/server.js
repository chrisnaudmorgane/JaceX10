const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static('bocal'));

let loans = [];

app.post('/loan-book', (req, res) => {
    const { surname, lastname, email, promotion, object, loan_date, return_date } = req.body;
    const loan = { surname, lastname, email, promotion, object, loan_date, return_date, time: new Date() };
    loans.push(loan);
    res.status(200).send('Loan recorded successfully!');
});

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
    },
});

cron.schedule('*/2 * * * *', () => {
    loans.forEach((loan) => {
        let mailOptions = {
            from: `"Book Reminder" <${process.env.EMAIL}>`,
            to: loan.email,
            subject: 'Reminder: Return Book',
            html: `<p>Hi ${loan.surname} ${loan.lastname},</p><p>This is a reminder to return the book "${loan.object}".</p>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Reminder sent: %s', info.messageId);
        });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
