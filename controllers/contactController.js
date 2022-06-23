const contactModel = require('../models/contactModel');

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