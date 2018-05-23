const axios = require('axios');

module.exports = function (req, res, next) {
    const post_id = req.body.post_id;
    axios
        .get(`https://news-at.zhihu.com/api/4/story-extra/${post_id}`)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}