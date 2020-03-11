import styled, { DefaultTheme } from "styled-components";
import Paragraph from "../Paragraph";

import Modal, { ModalProps } from "styled-react-modal";

interface OptionModalProps extends ModalProps {
  theme: DefaultTheme;
}

export const StyledModal = Modal.styled`
  background: ${(props: OptionModalProps) => props.theme.colors.lightBlue};
  color: ${(props: OptionModalProps) => props.theme.colors.white};
  max-width: 30rem;
  outline: none;
  padding: ${(props: OptionModalProps) => props.theme.spacing.large};
  text-align: center;
`;

export const ModalTitle = styled.h3`
  margin: 0 0 ${props => props.theme.spacing.medium} 0;
`;

export const ModalBody = styled(Paragraph)`
  font-size: 2rem;
  font-weight: 300;
  margin: 0 0 ${props => props.theme.spacing.large} 0;
  word-break: break-all;
`;
