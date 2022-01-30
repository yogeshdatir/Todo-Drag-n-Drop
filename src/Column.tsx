import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  flex: 1;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div<any>`
  padding: 8px;
  background-color: ${(props: any) =>
    props.isDraggingOver ? "#e0e0e0" : "#fff"};

  flex: 1;
  min-height: 100px;
`;

interface IProps {
  column: any;
  tasks: any;
}

const Column = ({ column, tasks }: IProps) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task: any, index: number) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {/* A place holder is a React element that is used to increase the available space in a droppable during a drag when it's needed. The place holder needs to be added as a child of the component that you designate as the droppable. */}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
