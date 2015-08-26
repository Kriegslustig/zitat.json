Session.setDefault('currentQuote', 1)

Template.quoteList.helpers({
  currentQuote: function () {
    var currentQuote = Quotes.find().fetch()[Session.get('currentQuote')]
    Meteor.call('hit', currentQuote._id)
    return currentQuote
  }
})
