const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
// const { default: isEmail } = require('validator/lib/isemail')
const notes = require('./notes.js')

// const msg = getNotes()
// console.log(msg)
 
// email_test = validator.isEmail('@yahoo.com')
// console.log(email_test)
// console.log(chalk.bold.green('Success!'))
// console.log(process.argv)

// const command = process.argv[2]
// if (command === 'add'){
//     console.log('adding value')
// } else if (command === 'remove') {
//     console.log('removing notes')
// }
// CUSTOMIZE YARGS VERSION
yargs.version('1.1.0')

// CREATING ADD COMMAND
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: 'true',
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// CREATING REMOVE COMMAND
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// CREATING LIST COMMAND

yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler(){
        notes.listNotes()
    }
})

// CREATING READ COMMAND

yargs.command({
    command: 'read',
    describe: 'reads all the notes',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

// console.log(yargs.argv)