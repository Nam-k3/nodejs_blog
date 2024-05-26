class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /:slug
    show(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController();
