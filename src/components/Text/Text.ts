import styled from "styled-components";

interface IProps {
  isWidgetMessage?: boolean;
  isOptionText?: boolean;
  isError?: boolean;
}

export const Heading1 = styled.h1`
  font-size: ${props => props.theme.spacing.large};
  margin: 0;
  @media (min-width: ${props => props.theme.spacing.desktopBreakpoint}) {
    margin-bottom: ${props => props.theme.spacing.medium};
  }
`;

export const Heading2 = styled.h2`
  color: ${props => props.theme.colors.offWhite};
  font-size: ${props => props.theme.spacing.medium};
  font-weight: 500;
  margin: 0;
`;

export const Heading3 = styled.h3`
  margin: 0;
`;

export const Paragraph = styled.p<IProps>`
  margin: 0;
  word-break: break-all;

  ${props =>
    props.isWidgetMessage
      ? `
          border-bottom: 1px solid lighten(${props.theme.colors.lightBlue}, 10%);
          color: ${props.theme.colors.offWhite};
          padding: ${props.theme.spacing.large};
          text-align: center;
        `
      : undefined}

  ${props =>
    props.isOptionText
      ? `color: ${props.theme.colors.white};
  font-weight: 500;
  font-size: 2rem;`
      : undefined}

  ${props =>
    props.isError
      ? `color: ${props.theme.colors.offWhite};
      font-style: italic;
      margin: ${props.theme.spacing.medium} 0 0 0;
      padding: 0 ${props.theme.spacing.medium};`
      : undefined}
`;
