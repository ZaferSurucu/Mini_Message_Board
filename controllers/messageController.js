const Message = require('../models/message');
const { DateTime } = require('luxon');

exports.message_list = (req, res, next) => {
    Message.find({}, 'user text added')
        .sort({added: -1})
        .then((messages) => {
            res.render('index', {title: 'Message Board', messages: messages});
        })
        .catch((err) => {
            return next(err);
        }
    );
};

exports.message_create_get = (req, res, next) => {
    res.render('form', {title: 'New Message'});
};

exports.message_create_post = (req, res, next) => {
    const name = req.body.user_name;
    const text = req.body.text;
    const message = new Message({user: name, text: text, added: Date.now()});

    try {
        message.save();
        console.log('Message saved');
        res.redirect('/');
    } catch (err) {
        return next(err);
    }
};