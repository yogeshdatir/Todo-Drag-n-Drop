import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

const TaskList = styled.div<any>`
  padding: 8px;
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
        {(provided: any) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
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
