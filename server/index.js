const express = require('express');
const cors = require('cors');
// const axios = require('axios');
const router = require('./router');
const app = express();

 
app.use(cors());
app.use(router);
 
// app.get('/', function (req, res, next) {
//     axios
//     .get('https://news-at.zhihu.com/api/4/news/3892357')
//     .then(function(response) {
//         res.json(response.data);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });
// })
 
app.listen(3333, function () {
  console.log('running at port 3333');
})