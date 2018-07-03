const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('knex') ({
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'ViralShare',
    },
});
const saltRounds = 12;

router.post('/', (req, res, next) => {
  knex('promoters')
    .where('user_name', req.body.user_name)
    .first()
    .then((promoter) => {
      if(promoter){
        res.send('User alredy exists!')
      } else {
        return promoter;
      }
    })
    .then((promoter) => {
      return bcrypt.hash(req.body.password, saltRounds)
    })
    .then((password) => {
      knex('promoters')
      .insert({
        user_name: req.body.user_name,
        email: req.body.email,
        password: password
      })
      .returning('*')
      .then( (promoter) => {
        req.session = promoter.id;
        console.log(req.body)
        res.send('Booyah')
      })
    })
  });



module.exports = router;
