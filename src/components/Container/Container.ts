import styled from "styled-components";

const Container = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.medium};
`;

export default Container;
