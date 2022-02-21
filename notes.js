const fs=require('fs');
const chalk=require('chalk');



const addNote = (title, body)=> {
  const notes = loadNotes();
  const duplicateNote = notes.find((note)=>note.title === title);
  if (duplicateNote) {
    const msg=chalk.bgRed(title, " already exist in notes");
    console.log(msg);
    return;
  }
  notes.push({
    title: title,
    body: body,
  });
  saveNotes(notes);
  console.log(chalk.bgGreen('Added successfully'))
};


const removeNote = (title) =>{
  let notes = loadNotes();
  const len=notes.length;
  notes = notes.filter((note) =>note.title !== title);
  if(len==0 || notes.length==len ){
      console.log(chalk.bgRed(title,' does  not exist'));
      return
  }
  console.log(chalk.bgGreen(title,' removed successfully'));
  saveNotes(notes);
};

const listAllNotes=()=>{
  let notes=loadNotes();
  console.log(chalk.bgBlue.inverse('Your Notes'))
  notes.forEach(note => {
    console.log(note.title,' ');
  });
}

const readNote= (title)=>{
  const notes=loadNotes();
  const findNote = notes.find((note)=>note.title ===title);
  debugger;
  if(findNote)
  {
    console.log(chalk.inverse(title),findNote.body);
  }
  else
    console.log(chalk.bgRed('title doesnot exist'))
}

const saveNotes = (notes)=> {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};



const loadNotes = ()=> {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNote: addNote,
  removeNote:removeNote,
  listAllNotes:listAllNotes,
  readNote:readNote
};
