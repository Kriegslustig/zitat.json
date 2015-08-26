Meteor.startup(function () {
  Meteor.subscribe('allQuotes', function () {
    Blaze.render(Template.quoteList, document.body)
  })

  setInterval(function () {
    var newIndex = Session.get('currentQuote')  + 1
    if(newIndex >= Quotes.find().count()) newIndex = 0
    Session.set('currentQuote', newIndex)
  }, 2000)
})