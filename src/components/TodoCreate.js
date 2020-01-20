import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.div`
  background: #38d9a9;

  &:hover {
    background: #63e6be;
  }

  &:active {
    background: #20c997;
  }

  z-index: 5; /* to place it on top of everything */
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* put it in the mid-bottom */
  position: absolute;
  left: 50%;
  bottom: 0;
  /* go left 50% of the size, go down 50% of the size */
  transform: translate(-50%, 50%);

  font-size: 60px; /* icon size */
  color: white;
  border-radius: 40px;
  border: none;
  outline: none;

  /* transition: 속성을 서서히 변화 시킨다 */
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;

      &:hover {
        background: #ff8787;
      }

      &:active {
        background: #fa5252;
      }

      /* maintain the original options and rotate it 45 degrees */
      /* to make it look like a 'x' */
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

// insert-forms position
const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.div`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* if button clicked, add insert-form */}
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input placeholder="할 일을 입력 후, Enter 를 누르세요" autoFocus />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
