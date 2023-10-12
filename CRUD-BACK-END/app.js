const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const Contact = require('./postModel'); 
const connex = require('./connection'); 
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/contact', async (req, res) => {
    const { firstName, lastName, email, message, phoneNumber } = req.body;
    try {
        const newContact = new Contact({
            firstName,
            lastName,
            phoneNumber,
            email,
            message,
        });
        sendEmail(firstName, lastName, email, message, phoneNumber);
        await newContact.save();
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting contact form' });
    }
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'salim.chaaki@gmail.com',
        pass: 'yaytgwsmwkgmkuri',
    }
});

const sendEmail = (firstName, lastName, email, message, phoneNumber) => {
    const mailOptions = {
        from: 'salim.chaaki@gmail.com',
        to: 'salim.chaaki@gmail.com',
        subject: 'Nodemailer Test',
        text: `firstName: ${firstName}\n lastName: ${lastName}\n Email: ${email}\nMessage: ${message}\nphoneNumber: ${phoneNumber} `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
