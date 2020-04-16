const db = require('./sql_config');


const getBookmarks = (request, response) => {
    db.query('SELECT * FROM bookmarks ORDER BY uuid ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

const getTags = (request, response) => {
    db.query('SELECT * FROM tags ORDER BY tagID ASC', (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
};






module.exports = {
    getBookmarks,
    getTags
}