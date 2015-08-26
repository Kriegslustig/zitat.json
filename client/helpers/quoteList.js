Session.setDefault('currentQuote', 1)

Template.quoteList.helpers({
  currentQuote: function () {
    return Quotes.find().fetch()[Session.get('currentQuote')]
  }
})
