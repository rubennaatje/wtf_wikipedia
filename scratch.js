var wtf = require('./src/index')
// var wtf = require('./builds/wtf_wikipedia')
wtf.extend(require('./plugins/image/src'))

// let txt = require('fs')
//   .readFileSync('/Users/spencer/mountain/wtf_wikipedia/tests/cache/royal_cinema.txt')
//   .toString()

// let str = `hello [[bs:cool]]`
// console.log(wtf(str).text())

// let str = `majority of [[music]], [[film]]s, [[book]]s`
// let doc = wtf(str)
// console.log(doc.links().map(l => l.json()))

// let str = `infront {{math| missing {{=}} text}} behind`
// let doc = wtf(str)
// console.log(doc.text())
// infront behind

console.log(wtf(`Boasting over {{cvt|1,000,000|ha|acre}} of [[Parks in Sydney|nature reserves and parks]]`).text())
