# cloudmark-api [![heroku](https://img.shields.io/badge/heroku-deployed-purple?style=plastic&logo=heroku)](https://cloudmark-api.herokuapp.com/)

A Simple bookmark CRUD API built using NodeJS.

Deployed on heroku: https://cloudmark-api.herokuapp.com/

## Getting Started

1. git clone https://github.com/the-redlord/cloudmark-api.git
2. npm install
4. npm index.js

### Prerequisites

* NodeJS
* npm

## Deployment

Deploy to your server to access the API. 

## Built With

* NodeJS
* ExpressJS
* Postgresql

## Usage

### Bookmarking

* Create a Bookmark -POST- http://yoursite/bookmarks/create

```json
{
	"link":"https://www.google.com",
	"title":"Google",
	"publisher":"Google"
}
```
* Delete a bookmark -DELETE- http://yoursite/bookmarks/:id

### Tag

* Create a tag -POST- /tags/create
```json
{
	"title":"google"
}
```
* Delete a tag -DELETE- /tags/:id
* Add Tag to bookmark -PUT- /tags/:tagid/:bmarkid
* Remove tag from bookmark -PUT- /remtag/:tagid/:bmarkid

### Displaying

* Display bookmarks -GET- /bookmarks
* Display tags -GET- /tags

## Authors

* **Chinmay Sharma**

## License

This project is licensed under the MIT License.
