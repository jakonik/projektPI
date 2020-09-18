const express = require('express');
const router = express.Router();


//const bookshelf = require('../config/bookshelf');
//const Application = bookshelf.Model.extend({
//  tableName: 'applications'
//});


const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);
router.get('/view', PagesController.view);
router.get('/ifPass', PagesController.ifPass);
router.post('/applications', ApplicationsController.store);
router.post('/applications2', ApplicationsController.store1);
router.post('/applications3', ApplicationsController.store2);

module.exports = router;
