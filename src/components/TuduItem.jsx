import styles from "./todoitem.module.css";
export default function TuduItem({item,tudus,setTudus}){
    function handleDelete(item){
        console.log("Button is clicked",item);
        setTudus(tudus.filter((tudu)=>tudu !== item));
    }
    function handleClick(name){
        const newArray = tudus.map((tudu)=>
        tudu.name === name ? {...tudu, done: !tudu.done}:tudu);
        setTudus(newArray);
    }
    const className = item.done ? styles.completed : "";

    return( <div className={styles.item}>
    <div className={styles.itemName}>
    <span className={className} onClick={() => handleClick(item.name)}>{item.name}</span>
    <span>
        <button onClick={()=> handleDelete(item)}className={styles.deleteButton}>x</button>
    </span>
    </div>
    
    <hr className={styles.line}/>
    </div>
    );
}