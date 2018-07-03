const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-sessions');
const PORT = process.env.PORT || 3000


const app = express();


app.use(express.static(path.join(__dirname,'public') ) )
app.use(express.static('node_modules'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const promoters = require('./routes/promoters')

app.use('/promoters', promoters)

// app.use('/', require('./routes/promoters'))

app.use('/', (req, res)=>{
  res.sendfile('./public/login.html', { root : __dirname})
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})



module.exports = app
