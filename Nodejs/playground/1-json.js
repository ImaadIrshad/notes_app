const fs = require('fs')
const { json } = require('stream/consumers')
// const book = {
//     title: 'Game of Thrones',
//     author: 'George RR Martin'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// // const parsedData = JSON.parse(bookJSON)
// // console.log(parsedData.author)
// fs.writeFileSync('1-json.json', bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
//console.log(data.name)
data.name = 'Ross'
data.age = 42
const updateJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', updateJSON)