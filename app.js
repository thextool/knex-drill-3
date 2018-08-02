const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

const games = require('./routes/games')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use('/games', games)

app.get('/', (req, res) => {
    res.json({
        message: 'we are up and running'
    })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    res.status(404)
    next(err)
})

// error handler
app.use((err, req, res, next) => {
    res
    .status(err.status || 500)
    .json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err.stack : {}
    })
})

module.exports = app
