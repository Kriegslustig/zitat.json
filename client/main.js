Meteor.startup(function () {
  // Get all quotes from the server
  Meteor.subscribe('allQuotes', function () {

    // Render the quote template
    Blaze.render(Template.quoteList, document.body)

    // This sets a new quote
    setInterval(function () {
      Session.set('currentQuote', Math.round(Math.random() * Quotes.find().count() - 1))
    }, 4000)

  })
})
