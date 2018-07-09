const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex')
const saltRounds = 12;

router.post('/signup', (req, res, next) => {
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
        req.session.user_id = promoter.id;
        // console.log(req.session)
        res.send('Booyah')
      })
    })
  });

  router.post('/login', (req, res, next) => {
    knex('promoters')
    .where('email', req.body.email)
    .first()
    .then((promoter) => {
        if (!promoter) {
          res.status(400).send('Nope');
        } else {
          bcrypt.compare(req.body.password, promoter.password)
            .then((success) => {
              req.session.user_id = promoter.id
              res.json({
                id: promoter.id,
                user_name: promoter.user_name,
              })
            })
            .catch((err) => {
              res.status(400).redirect('/')
            })
        }
      })
  })

  router.delete('/logout', (req, res) => {
    console.log('test',req.session);
    console.log('testest',req.session.user_id);
    req.session = null;
    res.redirect('/');
  });



module.exports = router;
