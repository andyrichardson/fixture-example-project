import React, { FC, forwardRef } from "react";
import styled from "styled-components";

interface DialogProps {
  onClose?: () => void;
}
type DialogElementProps = JSX.IntrinsicElements["dialog"];

export const Modal = forwardRef<
  HTMLDialogElement,
  DialogProps & Omit<DialogElementProps, "ref">
>(({ onClose, ...dialogProps }, ref) => {
  if (!dialogProps.open) {
    return null;
  }

  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalDialog ref={ref} {...dialogProps} />
    </>
  );
});

const ModalDialog = styled.dialog`
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${props => props.theme.darkGrey};
  border: none;
  color: #fff;

  h1 {
    margin-top: 0;
  }

  h1 + * {
    margin-top: 0;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: #000;
  opacity: 0.8;
`;
