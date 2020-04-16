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
app.post('/api/bookmarks/create',(request,response) => {


});

app.delete('/api/bookmarks',(request,response)=>{

});


// Tag Routes
app.post('/api/tags/create',(request,response) => {


});

app.delete('/api/tags',(request,response)=>{

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