const lodash = require("lodash");

const countBlogs = (blogs) => {
   let count =  lodash.countBy(blogs, 'length')
   return Object.keys(count)[0];
}

const search = (data, query) => {
   let result = [];
   
   for (let i= 0; i < data.length; i++) {
   Object.keys(data[i]).map(key => {
        if(key.includes(query)) result.push(data[i])
   })

  Object.values(data[i]).map(value => {
   if(value.includes(query)) result.push(data[i])
  })
}
return result;
}

const longestTitle = (blogs) => {
   let len = 0
   let longestTitle = ""
   lodash.forEach(blogs, (b) => {
           if(b['title'].length > len)  {
               len = b['title'].length
               longestTitle = b['title']
           }
       })

   return longestTitle

}

const titleWithPrivacy = (blogs) => {
   var count = 0
   lodash.forEach(blogs, (b) => {
         if(b['title'].includes("privacy")) {
            count++
        }
   })
   return count
}

const uniqueBlogTitles = (blogs) => {
   var titles = []
   lodash.forEach(blogs, (b) => {
         titles.push(b['title'])
   })

   return lodash.uniq(titles)
}
module.exports = {countBlogs, search,longestTitle, uniqueBlogTitles, titleWithPrivacy};
