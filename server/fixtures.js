Meteor.startup(function () {
  if(Quotes.find().count() < 1) {
    [
      ['Me', 'Hi!'],
      ['Him', 'Ho!'],
      ['The Others', 'Yo!'],
      ['Me', 'No!'],
      ['Others', 'Tolololo!'],
      ['Anon', 'Hah!'],
      ['Ho', 'Hi!'],
      ['Yo', 'Hiii!'],
      ['Me', 'Hiasd!'],
      ['Me', 'asdHi!'],
      ['Me', 'Hsadsfggi!'],
    ]
      .map(function (e) {
        Quotes.insert({
          author: e[0],
          quote: e[1],
          created: (new Date).getTime(),
          updated: (new Date).getTime(),
        })
      })
  }
})