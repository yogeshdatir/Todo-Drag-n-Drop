import { useState } from "react";
import "./styles.css";
import initialData from "./initial-data";

import Column from "./Column";
import { DragDropContext, DragUpdate } from "react-beautiful-dnd";

export default function App() {
  const [tasks, setTasks] = useState<{
    tasks: any;
    columns: any;
    columnOrder: string[];
  }>(initialData);

  const onDragEnd = (result: DragUpdate) => {
    // It is the responsibility of this responder to synchronously apply changes that has resulted from the drag
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const column = tasks.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    if (destination?.index !== undefined)
      newTaskIds.splice(Number(destination?.index), 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newTasks = {
      ...tasks,
      columns: {
        ...tasks.columns,
        [newColumn.id]: newColumn,
      },
    };

    setTasks(newTasks);
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
