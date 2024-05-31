import {useState} from "react";
import styles from "./form.module.css";
export default function Form({tudus,setTudus}){
    // const [tudu,setTudu] = useState("");
    const [tudu,setTudu] = useState({name:"",done:false}); 


    function handleSubmit(e){
        e.preventDefault();
        setTudus([...tudus,tudu]);
        setTudu({name:"",done:false});
    }

  return  (
     <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            <input className={styles.modernInput}onChange={(e)=>setTudu({name:e.target.value,done:false})} 
            value={tudu.name} 
            type="text"  
            placeholder ="Enter TODO List..."    
            />
            <button className={styles.modernButton} type="submit">Add</button>
        </div> 
        </form>
  );
}