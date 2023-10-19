import styles from "./assignments.module.css";
import { Assignment } from "../Assignment";

export function Assignments({
  assignments,
  handleDeleteAssignment,
  handleToggleComplete,
}) {
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {assignments.filter((assignment) => assignment.completed).length} of{" "}
            {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            key={index}
            title={assignment.title}
            onDelete={() => handleDeleteAssignment(index)}
            onToggleComplete={() => handleToggleComplete(index)}
            completed={assignment.completed}
          />
        ))}
      </div>
    </section>
  );
}
