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

// tags queries
const addTag = (request,response) => {
    let {title} = request.body;
    db.query('INSERT INTO tags (title,time_created,time_updated) VALUES ($1,$2,$3)',[title,getTimestamp(),getTimestamp()], (error, results) => {
        if (error) {
            response.status(400).send('ERROR 400: Bad Request!')
            throw error
        }
        response.status(201).send('SUCCESS 201: Tag added')
    })

};

const deleteTag = (request,response) => {
    let tagid = parseInt(request.params.id);
    db.query('DELETE FROM tags WHERE tagID=$1',[tagid], (error, results) => {
        if (error) {
            response.status(400).send('ERROR 400: Bad Request!')
            throw error
        }
        response.status(200).send('SUCCESS 200: Tag deleted')
    })
};

const addTagToBmark = (request,response) => {
    let tagid = parseInt(request.params.tagid);
    let bmarkid = parseInt(request.params.bmarkid);
    db.query('INSERT INTO connection (bookmark_uuid,tagID) VALUES ($1,$2)',[bmarkid,tagid], (error, results) => {
        if (error) {
            response.status(400).send('ERROR 400: Bad Request!')
            throw error
        }
        response.status(200).send('SUCCESS 200: Tag addded to bookmark')
    })
};

const remTagFromBmark = (request,response) => {
    let tagid = parseInt(request.params.tagid);
    let bmarkid = parseInt(request.params.bmarkid);
    db.query('DELETE FROM connection WHERE bookmark_uuid = $1 AND tagID = $2',[bmarkid,tagid], (error, results) => {
        if (error) {
            response.status(400).send('ERROR 400: Bad Request!')
            throw error
        }
        response.status(200).send('SUCCESS 200: Tag removed from bookmark')
    })
};


// display queries
const getBookmarks = (request, response) => {
    db.query('SELECT bookmarks.* , connection.tagID FROM bookmarks LEFT OUTER JOIN connection ON bookmarks.uuid = connection.bookmark_uuid ORDER BY bookmarks.uuid ASC', (error, results) => {
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
    deleteBookmark,
    addTag,
    deleteTag,
    addTagToBmark,
    remTagFromBmark
}