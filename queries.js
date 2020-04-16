const db = require('./sql_config');

// generate timestamp for current time
const getTimestamp = () => {
    return Math.floor(Date.now() / 1000).toString()
};

// bookmark queries
const addBookmark = (request,response) => {
    let {link,title,publisher} = request.body;
    // currently keeping time_updated same as time_created as there is no update method
    db.query('INSERT INTO bookmarks (link,title,time_created,time_updated,publisher) VALUES ($1,$2,$3,$4,$5)',[link,title,getTimestamp(),getTimestamp(),publisher], (error, results) => {
        if (error) {
            response.status(400).send('ERROR 400: Bad Request!')
            throw error
        }
        response.status(201).send('SUCCESS 201: Bookmark added')
    })

};

const deleteBookmark = (request,response) => {
    let uuid = parseInt(request.params.id);
    console.log(uuid);
    db.query('DELETE FROM bookmarks WHERE uuid=$1',[uuid], (error, results) => {
        if (error) {
            response.status(400).send('ERROR 400: Bad Request!')
            throw error
        }
        response.status(200).send('SUCCESS 200: Bookmark deleted')
    })
};

// display queries
const getBookmarks = (request, response) => {
    db.query('SELECT * FROM bookmarks ORDER BY uuid ASC', (error, results) => {
      if (error) {
        response.status(400).send('ERROR 400: BAD Request!')
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

const getTags = (request, response) => {
    db.query('SELECT * FROM tags ORDER BY tagID ASC', (error, results) => {
        if (error) {
            response.status(400).send('ERROR 400: BAD Request!')
            throw error
        }
        response.status(200).json(results.rows)
    })
};






module.exports = {
    getBookmarks,
    getTags,
    addBookmark,
    deleteBookmark
}