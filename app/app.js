const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = process.env.PORT || 3000


const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(logger('dev'))
app.use(express.static(path.join(__dirname,'public') ) )
app.use(express.static('node_modules'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())


app.use('/api/campaigns', require('./routes/campaigns'))
app.use('/api/promoters', require('./routes/promoters'))
app.use('/api/influencers', require('./routes/influencers'))
app.use('/api/shared', require('./routes/shared'))

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})



module.exports = app
