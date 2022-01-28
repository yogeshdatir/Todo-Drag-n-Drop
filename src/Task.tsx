import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div<any>`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
`;

interface IProps {
  task: any;
  index: any;
}
const Task = ({ task, index }: IProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: any) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
