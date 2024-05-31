import TuduItem from "./TuduItem";
import styles from "./todolist.module.css";
export default function TodoList({tudus ,setTudus}){

   const sortedTodos = tudus.slice().sort((a,b) =>Number(a.done)-Number(b.done));

    return (
    <div className={styles.list}>
    {sortedTodos.map((item) => (
        <TuduItem key={item.name} 
        item={item} 
        tudus={tudus} 
        setTudus={setTudus}/>
     ))}

     </div>
    );
}