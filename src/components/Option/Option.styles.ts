import styled from "styled-components";
import Paragraph from "../Paragraph";

export const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.offWhite};
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.large}
    ${props => props.theme.spacing.medium};
`;

export const OptionText = styled(Paragraph)`
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
  word-break: break-all;
`;
