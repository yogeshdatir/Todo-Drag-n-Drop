import { useState } from "react";
import "./styles.css";
import initialData from "./initial-data";

import Column from "./Column";
import { DragDropContext, DragUpdate } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

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

    const startColumn = tasks.columns[source.droppableId];
    const finishColumn = tasks.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      if (destination?.index !== undefined)
        newTaskIds.splice(Number(destination?.index), 0, draggableId);

      const newColumn = {
        ...startColumn,
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
    }

    // Moving from one list to another
    const startColumnTaskIds = Array.from(startColumn.taskIds);
    startColumnTaskIds.splice(source.index, 1);

    const newStartColumn = {
      ...startColumn,
      taskIds: startColumnTaskIds,
    };

    const finishColumnTaskIds = Array.from(finishColumn.taskIds);
    if (destination?.index !== undefined)
      finishColumnTaskIds.splice(Number(destination?.index), 0, draggableId);

    const newFinishColumn = {
      ...finishColumn,
      taskIds: finishColumnTaskIds,
    };

    const newTasks = {
      ...tasks,
      columns: {
        ...tasks.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          {tasks.columnOrder.map((columnId: string) => {
            const column = tasks.columns[columnId];
            const tasksInColumn = column.taskIds.map(
              (taskId: string) => tasks.tasks[taskId]
            );

            return (
              <Column key={column.id} column={column} tasks={tasksInColumn} />
            );
          })}
        </Container>
      </DragDropContext>
    </div>
  );
}
