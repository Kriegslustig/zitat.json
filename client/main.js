Meteor.startup(function () {
  Meteor.subscribe('allQuotes', function () {

    Blaze.render(Template.quoteList, document.body)

    setInterval(function () {
      Session.set('currentQuote', Math.round(Math.random() * Quotes.find().count() - 1))
    }, 4000)

  })
})
