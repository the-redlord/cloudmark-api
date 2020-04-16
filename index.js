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
    response.json({ info: 'Cloudmark - Simple Bookmark API' })
  });

// Bookmark routes
app.post('/bookmarks/create',queries.addBookmark);

app.delete('/bookmarks/:id',queries.deleteBookmark);


// Tag Routes
app.post('/tags/create',queries.addTag);

app.delete('/tags/:id',queries.deleteTag);

app.put('/tags/:tagid/:bmarkid',queries.addTagToBmark);

app.put('/remtag/:tagid',queries.remTagFromBmark);

// Display Routes
app.get('/bookmarks',queries.getBookmarks);

app.get('/tags', queries.getTags);

// Run Server
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });