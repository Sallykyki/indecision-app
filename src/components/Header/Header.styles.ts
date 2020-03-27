import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.offBlack};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.medium};
  padding: ${props => props.theme.spacing.medium} 0;
`;
