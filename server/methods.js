Meteor.methods({
  hit: function (quoteId) {
    if(!Quotes.findOne(quoteId)) return false
    Hits.insert({quote: quoteId})
  }
})