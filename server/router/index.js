var express = require('express');
var router = express.Router();


var latest = require('./../controller/latest')
var details = require('./../controller/details')
var theme = require('./../controller/theme')


// 该路由使用的中间件
router.use('/test', function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
});

router.use('/latest', latest);
router.use('/details', details);
router.use('/theme', theme);

module.exports = router;