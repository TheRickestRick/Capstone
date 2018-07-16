
exports.up = function(knex, Promise) {
  return createPromoters()
  .then(createCampaign)
  .then(createInfluencers)
  .then(campaignsShared)

  function createCampaign(){
    return knex.schema.createTable('campaigns', function(table){
      table.increments();
      table.string('url').notNullable();
      table.integer('maxcpc').notNullable();
      table.integer('budget_remaining').notNullable();
      table.integer('total_clicks');
      table.integer('promoter_id');
      table.foreign('promoter_id').references('promoters.id');
      table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    })
  }
  function createPromoters(){
    return knex.schema.createTable('promoters', function(table){
      table.increments();
      table.string('user_name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
    })
  }
  function createInfluencers(){
    return knex.schema.createTable('influencers', function(table){
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('password');
      table.integer('total_points')
    })
  }
  function campaignsShared(){
    return knex.schema.createTable('campaigns_shared', function(table){
      table.increments();
      table.string('campaign_url')
      table.integer('clicks');
      table.integer('total_earned')
      table.integer('influencer_id')
      table.foreign('influencer_id').references('influencers.id');
      table.integer('campaign_id')
      table.foreign('campaign_id').references('campaigns.id');
    })
  }
}

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable('promoters'), knex.schema.dropTable('campaigns'), knex.schema.dropTable('influencers'), knex.schema.dropTable('campaigns_shared')]);
};
