const axios = require('axios');

module.exports = function (req, res, next) {
    const date = req.body.date;
    axios
        .get(`https://news-at.zhihu.com/api/4/news/before/${date}`)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}