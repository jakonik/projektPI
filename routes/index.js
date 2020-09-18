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
router.post('/applications', ApplicationsController.store);
router.post('/applications2', ApplicationsController.store1);
// ApplicationsController.store1});



//router.get('/applications2', async (req, res) => {
//   let users = await new Application().fetchAll();
//    res.json(users);
//  });

module.exports = router;


//https://dev.to/projectescape/a-crash-course-to-bookshelf-js-2ejb