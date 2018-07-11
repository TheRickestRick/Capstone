const express = require('express');
const router = express.Router();
const knex = require('../db/knex')


router.post('/create/:id', (req, res, next) => {
  // console.log(req.params.id)
  knex('campaigns')
    .insert(params(req))
    .returning('*')
    .then(campaigns => res.json(campaigns))
    .catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
  // console.log(req.params.id)
  knex('campaigns')
  .where('promoter_id', req.params.id)
    .then(campaigns => {
        res.json(campaigns)
      })
    .catch(err => next(err))
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
