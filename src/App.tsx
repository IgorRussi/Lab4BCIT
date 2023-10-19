import { useState } from "react";
import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";

function App() {
  const [assignments, setAssignments] = useState([]);

  const addAssignment = (title) => {
    if (title.trim() !== "") {
      setAssignments([
        ...assignments,
        {
          title: title,
          completed: false,
        },
      ]);
    }
  };

  const handleDeleteAssignment = (index) => {
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index, 1);
    setAssignments(updatedAssignments);
  };

  const handleToggleComplete = (index) => {
    const updatedAssignments = [...assignments];
    updatedAssignments[index].completed = !updatedAssignments[index].completed;
    setAssignments(updatedAssignments);
  };

  return (
    <>
      <Header addAssignment={addAssignment} />
      <Assignments
        assignments={assignments}
        handleDeleteAssignment={handleDeleteAssignment}
        handleToggleComplete={handleToggleComplete}
      />
    </>
  );
}

export default App;
