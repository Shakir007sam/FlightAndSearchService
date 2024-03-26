# Welcome to Flights Service 
## PRoject Setup
- Clone the project on your local 
-Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable 
    -`PORT=****`
    -Install the `src/config`folder create a new file `config.json` and then add the following piece of json
```
{
  "development": {
    "username": "root",
    "password": "***",
    "database": "your db name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```