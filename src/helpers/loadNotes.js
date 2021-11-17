import { useSelector } from "react-redux";
import { db } from "../firebase/fireConfig"


export const loadNotes= async(uid)=>{

    

    const noteSnap= await db.collection(`${uid}/jornal/notas`).get();

    

    const notes=[];

    noteSnap.forEach(notechild=>{

       

        notes.push({
            // uid,
            // ...notechild.data()
            id:notechild.id,
            ...notechild.data()

            

        });

       
    });

    console.log(notes);
    
   return notes;
}