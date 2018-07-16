const express = require('express');
const router = express.Router();
const knex = require('../db/knex')


router.post('/:campaign_id/:influencer_id', (req, res) => {
  knex('campaigns_shared')
  .where('campaign_id', req.params.campaign_id)
  .andWhere('influencer_id', req.params.influencer_id)
  .update({
    'clicks': knex.raw('clicks + 1')
  })
  .then((campaign) => {
    knex('campaigns_shared')
    .where('campaign_id', req.params.campaign_id)
    .andWhere('influencer_id', req.params.influencer_id)
    .first()
    .then((campaign)=> {
      res.json(campaign);
    })
  })
})

router.get(`/:influencer_id`, (req, res) => {
  knex('campaigns_shared')
  .where(`influencer_id`, req.params.influencer_id)
  .returning('*')
  .then((response)=>{
    res.json(response)
  })
})


module.exports = router
