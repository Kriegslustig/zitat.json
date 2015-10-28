// The current quote is saved here
Session.setDefault('currentQuote', 1)

// This gets and inserts a new quote
Template.quoteList.helpers({
  currentQuote: function () {
    var currentQuote = Quotes.find().fetch()[Session.get('currentQuote')]
    Meteor.call('hit', currentQuote._id)
    return currentQuote
  }
})
