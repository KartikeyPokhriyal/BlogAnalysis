const express = require("express");
const errorHandler = require("./controllers/middleware/errorhandler");
const  {getBlogStats, searchBlog} = require("./controllers/blogController");
const router = express.Router();

const app = express();

const dotenv = require("dotenv").config();

const port = process.env.PORT|| 5000;

app.use(express.json());

app.get('/api/blog-stats', 
  getBlogStats
);
app.get('/api/blog-search', 
  searchBlog
);

app.use(errorHandler)

app.listen(port, ()  => {console.log(`Server running on port ${port}`)});
