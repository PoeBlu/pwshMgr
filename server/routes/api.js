var uristring = process.env.MONGODB_URI || 'mongodb://localhost:27017/pwshmgr';
const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect(uristring);

const machines = require('./machines');
const users = require('./users');
const applications = require('./applications');
const jobs = require('./jobs');
const credentials = require('./credentials');
const scripts = require('./scripts');
const alertPolicies = require('./alertPolicies');
const alerts = require('./alerts')
const integrations = require('./integrations')

router.use('/machine', machines);
router.use('/job', jobs);
router.use('/user', users);
router.use('/credential', credentials);
router.use('/application', applications);
router.use('/script', scripts);
router.use('/alertpolicy', alertPolicies);
router.use('/alert', alerts);
router.use('/integration', integrations)

module.exports = router;