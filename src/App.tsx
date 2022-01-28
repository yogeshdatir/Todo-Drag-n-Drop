import { useState } from "react";
import "./styles.css";
import initialData from "./initial-data";

import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const [tasks, setTasks] = useState<{
    tasks: any;
    columns: any;
    columnOrder: string[];
  }>(initialData);

  const onDragEnd = () => {
    // It is the responsibility of this responder to synchronously apply changes that has resulted from the drag
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        {tasks.columnOrder.map((columnId: string) => {
          const column = tasks.columns[columnId];
          const tasksInColumn = column.taskIds.map(
            (taskId: string) => tasks.tasks[taskId]
          );

          return (
            <Column key={column.id} column={column} tasks={tasksInColumn} />
          );
        })}
      </DragDropContext>
    </div>
  );
}
