import styled from "styled-components";

export const OptionsContainer = styled.div`
  background: ${props => props.theme.colors.lightBlue};
`;

export const WidgetHeader = styled.div`
  background: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.offWhite};
  padding: ${props => props.theme.spacing.medium};
  display: flex;
  justify-content: space-between;
`;
