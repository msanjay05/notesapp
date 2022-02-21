const fs=require('fs');
// const validator = require("validator");
const notes = require("./notes");
// const chalk=require('chalk')
const yargs = require('yargs')

// customise yargs version
// yargs.version('1.1.1');


// Creating Add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true, // by default false
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true, // by default false
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})
// Creating Remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true, // by default false
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Creating List command
yargs.command({
    command:'list',
    describe:'List all notes',
    handler(){
        notes.listAllNotes();
    }
})
// Creating Read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true, // by default false
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse();
// console.log(yargs.argv);
