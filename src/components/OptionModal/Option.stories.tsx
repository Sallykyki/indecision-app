import React from "react";
import Theme from "../../styles/theme";
import { ModalProvider } from "styled-react-modal";
import { StyledModal, ModalTitle, ModalBody } from "./OptionModal.styles";
import Button from "../Button";

export default {
  title: "Modal"
};

export const defaultModal = () => (
  <Theme>
    <ModalProvider>
      <StyledModal isOpen={true}>
        <ModalTitle>Select Option</ModalTitle>
        <ModalBody>This is selected option</ModalBody>
        <Button>Okay</Button>
      </StyledModal>
    </ModalProvider>
  </Theme>
);
