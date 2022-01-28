import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

interface IProps {
  task: any;
}
const Task = ({ task }: IProps) => {
  return <Container>{task.content}</Container>;
};

export default Task;
