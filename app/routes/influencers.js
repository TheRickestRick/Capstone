const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex')
const saltRounds = 12;

router.post('/signup', (req, res, next) => {
  knex('influencers')
    .where('email', req.body.email)
    .first()
    .then((influencer) => {
      return influencer
    })
    .then((influencer) => {
      return bcrypt.hash(req.body.password, saltRounds)
    })
    .then((password) => {
      knex('influencers')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: password
      })
      .returning('*')
      .then( (influencer) => {
        req.session.user_id = influencer.id;
        res.json({
          id: influencer.id,
          first_name: influencer.first_name,
        })
      })
    })
  });



router.post('/login', (req, res, next) => {
  knex('influencers')
  .where('email', req.body.email)
  .first()
  .then((influencer) => {
      if (!influencer) {
        res.status(400).send('Nope');
      } else {
        bcrypt.compare(req.body.password, influencer.password)
          .then((success) => {
            req.session.user_id = influencer.id
            res.json({
              id: influencer.id,
              first_name: influencer.first_name,
            })
          })
          .catch((err) => {
            res.status(400).redirect('/')
          })
      }
    })
})


router.delete('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

router.post('/activateLink/:id', (req, res) => {
  knex('campaigns_shared')
  .insert({
        campaign_url: req.body.url,
        clicks:0,
        total_earned: 0,
        influencer_id: req.params.id,
        campaign_id: req.body.id
      })
    .then((campaign) =>{
      res.send('booyah')
    })
  // .where('campaign_id', req.body.id)
  // .first()
  // .then((campaign) => {
  //     if (!campaign_id) {
  //       .insert({
  //         campaign_url: req.body.url,
  //         clicks:0,
  //         total_earned: 0,
  //         influencer_id: req.params.id,
  //         campaign_id: req.body.id
  //       })
  //     }
  //     else {
  //       console.log("Already active!")
  //     }
  //   })

  console.log(req.params.id)
  console.log(req.body)

})


  module.exports = router
