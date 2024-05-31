import {useState} from "react";
// import TuduItem from "./TuduItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Tudu(){
    const [tudus,setTudus] = useState([]);

    const completedTudus = tudus.filter((tudu) => tudu.done).length;
    const totalTudus = tudus.length;

    return (<div>
        <Form tudus={tudus} setTudus={setTudus}/>
        <TodoList tudus={tudus} setTudus={setTudus}/>
        <Footer completedTudus = {completedTudus} totalTudus={totalTudus}/>
    </div>
    );
}