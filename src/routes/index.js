const express = require('express');
const v1routes = require('./v1routes/index');
const router = express.Router();
router.use('/v1', v1routes);
module.exports = router;