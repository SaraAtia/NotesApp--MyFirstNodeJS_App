const fs = require('fs')
const chalk = require('chalk')
// read a specific note by title
const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(!note){
        console.log(chalk.bgRed("No note found!"))
    } else {
        console.log(chalk.bgRgb(217, 252, 255).grey(note.title))
        console.log(note.body)
    }
}
// add a new note (if title isn't taken)
const addNote = (title, body) => {
    const notes = loadNotes()
    // find notes with identical title
    const duplicateNote = notes.find((note)=> note.title === title)
    debugger
    // if there is no note titled same - add a new note
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('New note added!'))
    } else { // else inform about the existing note
        console.log(chalk.bgRed('Note title taken!'))
    }
}
// save all notes given
const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))

//load all notes
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
   
}
// remove a note by title
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToSave = notes.filter((note)=> note.title !== title)
    if (notes.length > notesToSave.length){
        console.log(chalk.bgGreen("Note removed!"))
    } else {
        console.log(chalk.bgRed("No notes found!"))
    }
   saveNotes(notesToSave)
}
// list all notes by title
const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.bgRgb(217, 252, 255).grey.underline('Your notes:'))
    notes.forEach(note => console.log(chalk.rgb(217, 252, 255)(note.title)))
}

module.exports = {
    readNote: readNote,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote
} 
