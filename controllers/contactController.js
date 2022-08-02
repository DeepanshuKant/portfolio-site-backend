const contactModel = require('../models/contactModel');
const nodemailer = require('nodemailer');

exports.newContact = async (req, res, next) => {

    try {

        const { name, email, subject, message } = req.body;

        const newContact = await contactModel.create({ name, email, subject, message });

        if (!newContact) {
            res.status(400).json({
                success: false,
                message: 'Contact not created'
            });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "dkdeepanshukant@gmail.com",
                pass: "seabirdkant1A@"
            }
        })

        const options = {
            from: "dkdeepanshukant@gmail.com",
            to: email,
            subject: "Processing your request!!!",
            text: "Thank you for contacting us. We will get back to you soon."
        }

        transporter.sendMail(options, (err, info) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("Sent " + info.response);
        })

        res.status(201).json({
            success: true,
            newContact
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message
        })
    }
}