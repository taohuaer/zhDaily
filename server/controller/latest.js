const axios = require('axios');

module.exports = function(req, res, next) {
    console.log(res)
    axios
    .get('https://news-at.zhihu.com/api/4/news/latest')
    .then(function(response) {
        // console.log(response.data)
        res.send(response.data)
        // res.send('Hello World');
    })
    .catch(function(error) {
        console.log(error);
    });
}