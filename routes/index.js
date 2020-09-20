const express = require('express');
const router = express.Router();

const PagesController = require('../controllers/PagesController');
const ApplicationsController = require('../controllers/ApplicationsController');

router.get('/', PagesController.home);
router.get('/view', PagesController.view);
router.get('/ifPass', PagesController.ifPass);
router.post('/applications', ApplicationsController.pass);
router.post('/applications2', ApplicationsController.verification);
router.post('/applications3', ApplicationsController.ifPass);

module.exports = router;
