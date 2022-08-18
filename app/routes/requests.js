const express = require('express');
const router = express.Router();

const appController = require('../controllers/appController');

router.route('/test')
    .get(appController.test);

router.route('/products')
    .post(appController.products);


module.exports = {
    router: router,
    basePath: 'app'
};