require('dotenv').config()
require('./config/database')

//Express App is running the "production" version of the React App -- the index.html file in build folder
    //to update use npm run build command
    //browse to localhost:3001 to check out how production code will run when deployed
    //during dev, fetch requests need to be sent to Express so add proxy in package.json file to localhost:3001
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const port = process.env.PORT || 3001;      // Configure to use port 3001 instead of 3000 during development to avoid collision with React's dev server (localhost:3000)

const app = express()

//Middleware
    app.use(logger('dev'))
    app.use(express.json())

    // Configure both serve-favicon & static middleware to serve from the production 'build' folder
        app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
        app.use(express.static(path.join(__dirname, 'build')))

//Routes
    //Mount the Router
        app.use('/api/users', require('./routes/api/users'))

//Catch All Route --> The following "catch all" route (note the *) is necessary to return the index.html on all non-AJAX requests (if no APIs are hit)
    app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });


app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})