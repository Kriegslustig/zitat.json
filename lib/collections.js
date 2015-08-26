Schema = {}

Quotes = new Mongo.Collection('Quotes')

Schema.Quotes = new SimpleSchema({
  author: {
    type: String
  },
  quote: {
    type: String
  },
  created: {
    type: Number
  },
  updated: {
    type: Number
  }
})

Schema.Quotes.addValidator(function () {
  return (
    Quotes.findOne({
      quote: this.field('quote').value,
      author: this.field('author').value}
    ) ?
      'notAllowed':
      true
  )
})

Quotes.attachSchema(Schema.Quotes)

Hits = new Mongo.Collection('Hits')

Hits.attachSchema(new SimpleSchema({
  createdAt: {
    type: Number,
    autoValue: function () {
      return (new Date).getTime()
    }
  },
  quote: {
    type: String
  }
}))
