const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const rbac = require('../middleware/rbac');
const controller = require('../controllers/adminController');

router.get(
  '/',
  auth,
  rbac(['Admin']),
  controller.adminPage
);

module.exports = router;
