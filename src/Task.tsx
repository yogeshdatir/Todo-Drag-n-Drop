import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div<any>`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props: any) => (props.isDragging ? "#f2f2f2" : "#fff")};
  display: flex;
`;

const Handle = styled.div`
  background-color: green;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 4px;
`;

interface IProps {
  task: any;
  index: any;
}
const Task = ({ task, index }: IProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps} />
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
