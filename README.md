# cloudmark-api

A Simple bookmark CRUD API built using NodeJS.

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

* Create a Bookmark -POST- http://localhost:3000/bookmarks/create

```json
{
	"link":"https://www.google.com",
	"title":"Google",
	"publisher":"Google"
}
```
* Delete a bookmark -DELETE- http://localhost:3000/bookmarks/:id

## Authors

* **Chinmay Sharma**

## License

This project is licensed under the MIT License.