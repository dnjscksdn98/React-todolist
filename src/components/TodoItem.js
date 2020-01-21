import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

import { useTodoDispatch } from "../TodoContext";

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 24px; /* icons size */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  /* if it's done change color */
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1; /* occupy as much as it can */
  font-size: 21px;
  color: #495057;

  /* if it's done change color */
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;

  /* if cursor is above item, display Remove component */
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch(); // bring the dispatch by using custom hook

  // call toggle reducer
  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id
    });

  // call remove reducer
  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id
    });

  return (
    <TodoItemBlock>
      {/* if it's done add 'done icon' */}
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}
// add React.memo for optimization
export default React.memo(TodoItem);
