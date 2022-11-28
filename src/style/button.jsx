import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  font-weight: ${({ weigth }) => weigth};
  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      default:
        return css`
          width: 100%;
          max-width: 10.6rem;
          height: 4rem;
          background-color: var(--color-primary);
          border: 0.2rem solid var(--color-primary);
          outline: none;
          font-size: 1.6rem;
          color: var(--color-white-fixed);
          border-radius: 0.8rem;
          &&:hover {
            background-color: var(--color-primary-opc);
            border: 0.2rem solid var(--color-primary-opc);
            cursor: pointer;
          }
        `;
      case "secondaryDefault":
        return css`
          width: 100%;
          max-width: 10.6rem;
          height: 4rem;
          background-color: var(--color-grey-100);
          border: 0.2rem solid var(--color-grey-100);
          outline: none;
          font-size: 1.6rem;
          color: var(--color-white-fixed);
          border-radius: 0.8rem;

          &&:hover {
            background-color: var(--color-grey-50);
            border: 2px solid var(--color-grey-50);
            cursor: pointer;
          }
        `;
      case "primaryMedium":
        return css`
          width: 100%;
          height: 6rem;
          background-color: var(--color-primary);
          border: 0.2rem solid var(--color-primary);
          outline: none;
          font-size: 1.6rem;
          color: var(--color-white-fixed);
          border-radius: 0.8rem;

          &&:hover {
            background-color: var(--color-primary-opc);
            border: 0.2rem solid var(--color-primary-opc);
            cursor: pointer;
          }
        `;
      case "secondaryMedium":
        return css`
          width: 100%;
          height: 6rem;
          background-color: var(--color-grey-20);
          border: 0.2rem solid var(--color-grey-20);
          outline: none;
          font-size: 1.6rem;
          color: var(--color-grey-50);
          border-radius: 0.8rem;

          &&:hover {
            background-color: var(--color-grey-50);
            border: 0.2rem solid var(--color-grey-50);
            cursor: pointer;
            color: var(--color-white-fixed);
          }
        `;
    }
  }}
`;
