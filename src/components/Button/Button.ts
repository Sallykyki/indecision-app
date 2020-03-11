import styled from "styled-components";

interface IProps {
  link?: boolean;
  big?: boolean;
  disabled?: boolean;
}

const Button = styled.button<IProps>`
  background: ${props => props.theme.colors.purple};
  border: none;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
  padding: ${props => props.theme.spacing.small};
  font-size: ${props => props.theme.spacing.medium};
    ${props =>
      props.link
        ? `
      background: none;
      color: ${props.theme.colors.offWhite};
      padding: 0;
      border: none;
    `
        : undefined}
    ${props =>
      props.big
        ? `
      border-bottom: 0.6rem;
      font-weight: bold;
      font-size: ${props.theme.spacing.large};
      margin-bottom: ${props.theme.spacing.medium};
      padding: 2.4rem;
      width: 100%;
        `
        : undefined}
    ${props =>
      props.disabled
        ? `
      opacity: 0.5;
        `
        : undefined};
`;

export default Button;
