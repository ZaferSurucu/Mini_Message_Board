var express = require('express');
var router = express.Router();
var Message = require('../models/message');

const message_controller = require('../controllers/messageController');

/* GET home page. */
router.get('/', message_controller.message_list);

router.get('/new', message_controller.message_create_get);

router.post('/new', message_controller.message_create_post);

module.exports = router;