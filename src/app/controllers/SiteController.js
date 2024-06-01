const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //[GET] /
    async index(req, res, next) {
      Course.find({})
      .then(courses => { 
        res.render('home', { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);      
      }
      
    //[GET] /:slug
    search(req, res) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new SiteController();
