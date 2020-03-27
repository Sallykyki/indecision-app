import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.offWhite};
  display: flex;
  justify-content: space-between;
  padding: ${props => props.theme.spacing.large}
    ${props => props.theme.spacing.medium};
`;
