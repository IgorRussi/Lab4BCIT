import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

export function Assignment({ title, onDelete, onToggleComplete, completed }) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={onToggleComplete}>
        {completed ? <div className={styles.completed} /> : <div />}
      </button>
      <p>{title}</p>
      <button className={styles.deleteButton} onClick={onDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
