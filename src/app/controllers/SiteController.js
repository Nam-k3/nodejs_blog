
class SiteController{

    //[GET] /
    index(req, res){
        res.render('home');
    }

    //[GET] /:slug
    search(req, res){
        res.send('NEWS DETAIL!!!')
    }
}


module.exports = new SiteController;