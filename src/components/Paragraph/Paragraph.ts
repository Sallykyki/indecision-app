import styled from "styled-components";

interface IProps {
  isWidgetMessage?: boolean;
}

const Paragraph = styled.p<IProps>`
  color: black;

  ${props =>
    props.isWidgetMessage
      ? `
          border-bottom: 1px solid lighten(${props.theme.colors.lightBlue}, 10%);
          color: ${props.theme.colors.offWhite};
          margin: 0;
          padding: ${props.theme.spacing.large};
          text-align: center;
        `
      : undefined}
`;

export default Paragraph;
