const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.addNote(argv.title, argv.body)}
    
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'removing a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.removeNote(argv.title)}
})

// create list command - listing all notes
yargs.command({
    command: 'list',
    describe: 'listing all files',

    
    handler() {notes.listNote()}
})

// create read command
yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {notes.readNote(argv.title)}
})


yargs.parse()