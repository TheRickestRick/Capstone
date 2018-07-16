const express = require('express');
const router = express.Router();
const knex = require('../db/knex')


router.post('/create/:id', (req, res, next) => {
  knex('campaigns')
    .insert(params(req))
    .returning('*')
    .then(campaigns => res.json(campaigns))
    .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
  knex('campaigns')
  .where('promoter_id', req.params.id)
    .then(campaigns => {
        res.json(campaigns)
      })
    .catch(err => next(err))
})

router.get('/', (req, res, next) => {
  knex('campaigns')
    .returning('*')
      .then(campaigns => {
        res.json(campaigns)
      })
    .catch(err => next(err))
})

router.patch('/', (req, res, next) => {
  knex('campaigns')
  .where('id', req.body.campaign_id)
  .first()
  .update('total_clicks', req.body.clicks)
  .update({
    'budget_remaining': knex.raw('budget_remaining - (total_clicks * maxcpc)')
  })
  .returning('*')
  .then((campaign)=>{
    res.json(campaign)
  })
})


function params(req) {
  return {
    url: req.body.url,
    total_clicks: 0,
    maxcpc: req.body.maxcpc,
    budget_remaining: req.body.budget_remaining,
    promoter_id: req.params.id
  }
}



module.exports = router;
