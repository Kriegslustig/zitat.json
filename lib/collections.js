Quotes = new Mongo.Collection('Quotes')

Quotes.attachSchema(new SimpleSchema({
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
}))

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
