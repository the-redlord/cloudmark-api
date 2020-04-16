const express = require('express')
const bodyParser = require('body-parser')
const queries = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//Index Route
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

// Bookmark routes
app.post('/bookmarks/create',queries.addBookmark);

app.delete('/bookmarks/:id',queries.deleteBookmark);


// Tag Routes
app.post('/tags/create',(request,response) => {


});

app.delete('/tags',(request,response)=>{

});

app.put('/api/tag/addtomark',(request,response)=>{

});

app.put('/api/tag/removemark',(request,response)=>{

});

// Display Routes
app.get('/bookmarks',queries.getBookmarks);

app.get('/tags', queries.getTags);

// Run Server
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });