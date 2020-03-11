import React, { FunctionComponent } from "react";
import { ModalProvider } from "styled-react-modal";
import { ModalTitle, ModalBody, StyledModal } from "./OptionModal.styles";
import Button from "../Button";

interface IProps {
  selectedOption: string;
  handleClearSelectedOption: () => void;
}

const OptionModal: FunctionComponent<IProps> = ({
  selectedOption,
  handleClearSelectedOption
}) => (
  <ModalProvider>
    <StyledModal isOpen={!!selectedOption}>
      <ModalTitle>Select Option</ModalTitle>
      {selectedOption && <ModalBody>{selectedOption}</ModalBody>}
      <Button onClick={handleClearSelectedOption}>Okay</Button>
    </StyledModal>
  </ModalProvider>
);

export default OptionModal;
