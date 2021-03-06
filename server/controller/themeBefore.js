const axios = require('axios');

module.exports = function (req, res, next) {
    const theme_id = req.body.theme_id;
    const story_id = req.body.story_id;
    axios
        .get(`https://news-at.zhihu.com/api/4/theme/${theme_id}/before/${story_id}`)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}