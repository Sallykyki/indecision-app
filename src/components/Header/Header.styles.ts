import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.offBlack};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.medium};
  padding: ${props => props.theme.spacing.medium} 0;
`;

export const HeaderTitle = styled.h1`
  font-size: ${props => props.theme.spacing.large};
  margin: 0;
  @media (min-width: ${props => props.theme.spacing.desktopBreakpoint}) {
    margin-bottom: ${props => props.theme.spacing.medium};
  }
`;

export const HeaderSubtitle = styled.h2`
  color: ${props => props.theme.colors.offWhite};
  font-size: ${props => props.theme.spacing.medium};
  font-weight: 500;
  margin: 0;
`;
