import styled from "styled-components";
import Paragraph from "../Paragraph";

export const AddOptionForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.colors.lightBlue};
  @media (min-width: ${props => props.theme.spacing.desktopBreakpoint}) {
    flex-direction: row;
  }
`;

export const AddOptionInput = styled.input`
  background: ${props => props.theme.colors.darkBlue};
  border: none;
  color: ${props => props.theme.colors.offWhite};
  border-bottom: 0.3rem solid
    darken(${props => props.theme.colors.darkBlue}, 10%);
  flex-grow: 1;
  margin-bottom: ${props => props.theme.spacing.small};
  padding: ${props => props.theme.spacing.small};

  @media (min-width: ${props => props.theme.spacing.desktopBreakpoint}) {
    margin: 0 ${props => props.theme.spacing.small} 0 0;
  }
`;

export const AddOptionError = styled(Paragraph)`
  color: ${props => props.theme.colors.offWhite};
  font-style: italic;
  margin: ${props => props.theme.spacing.medium} 0 0 0;
  padding: 0 ${props => props.theme.spacing.medium};
`;
