const lodash = require('lodash')
const getData = require('../helperFunction.js')
const {countBlogs, search,longestTitle, uniqueBlogTitles, titleWithPrivacy} = require('../analytics/blogAnalytics.js')

const searchBlog = (req, res) => {
    const q = req.query.query
    getData().then((data) => { 

        try {
            let result = []
            result = search(data['blogs'], q)
            res.status(200).send(result)

        }
        catch(error) {
            res.status(400).send(error)
        }
       })
 }
 
const getBlogStats = (req, res)  => {
    getData().then((data) =>{ 
    const result = {}
    try {
    result["Blog with longest title"] = longestTitle(data['blogs'])
    result["titles containing the word privacy."] = titleWithPrivacy(data['blogs'])
    result["array of unique blog titles"] = uniqueBlogTitles(data['blogs'])

    }
    catch(error) {
        console.log("Title key seems to be missing " + error)
        res.status(400).send(error)
    }
    
    result["Total number of blogs"] = countBlogs(data)
    res.status(200).send(result)
}
    );

};
module.exports = {getBlogStats, searchBlog};
