import React, { FunctionComponent } from "react";
import Modal from "react-modal";

interface IProps {
  selectedOption: string;
  handleClearSelectedOption: () => void;
}

const OptionModal: FunctionComponent<IProps> = ({
  selectedOption,
  handleClearSelectedOption
}) => (
  <Modal
    isOpen={!!selectedOption}
    onRequestClose={handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Select Option</h3>
    {selectedOption && <p className="modal__body">{selectedOption}</p>}
    <button className="button" onClick={handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
