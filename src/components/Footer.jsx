import styles from "./footer.module.css";
export default function Footer({completedTudus,totalTudus}){
    return <div className ={styles.footer}>
         <span classsName={styles.item}>
            Completed Todos:{completedTudus}
         </span>
         <span className={styles.item}>
            Total Todos:{totalTudus}
         </span>
    </div>
}