import { useState } from "react";
import "./styles.css";
import initialData from "./initial-data";

import Column from "./Column";

export default function App() {
  const [tasks, setTasks] = useState<{
    tasks: any;
    columns: any;
    columnOrder: string[];
  }>(initialData);
  return (
    <div className="App">
      {tasks.columnOrder.map((columnId: string) => {
        const column = tasks.columns[columnId];
        const tasksInColumn = column.taskIds.map(
          (taskId: string) => tasks.tasks[taskId]
        );

        return <Column key={column.id} column={column} tasks={tasksInColumn} />;
      })}
    </div>
  );
}
