import styled, { css } from "styled-components";
import { BasedTitle } from "./components/BasedTitle";
import { BasedText } from "./components/BasedText";
export const StyledTitle = styled(BasedTitle)`
  color: ${({ color }) => color};
  ${({ titleStyle }) => {
    switch (titleStyle) {
      default:
        return css`
          font-size: 2.6rem;
          font-weight: 700;
        `;
      case "heading2":
        return css`
          font-size: 2.2rem;
          font-weight: 700;
        `;
      case "heading3":
        return css`
          font-size: 1.8rem;
          font-weight: 700;
        `;
      case "heading4":
        return css`
          font-size: 1.4rem;
          font-weight: 700;
        `;
    }
  }}
`;

export const StyledText = styled(BasedText)`
  font-weight: ${({ weigth }) => weigth};
  color: ${({ color }) => color};

  ${({ textStyle }) => {
    switch (textStyle) {
      default:
        return css`
          font-size: 1.6rem;
        `;
      case "body":
        return css`
          font-size: 1.4rem;
          color: var(--color-primary);
        `;
      case "body-600":
        return css`
          font-size: 1.4rem;
          color: var(--color-grey-50);
        `;
      case "caption":
        return css`
          font-size: 1.4rem;
          color: var(--color-grey-50);
        `;
    }
  }}
`;
