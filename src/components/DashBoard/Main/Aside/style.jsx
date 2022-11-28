import styled from "styled-components";

export const AsideStyled = styled.aside`
  margin-top: 3.1rem;
  width: 100%;
  max-width: 36.5rem;
  max-height: 53rem;
  display: flex;
  flex-direction: column;

  && .topCart {
    width: 100%;
    max-width: 36.5rem;
    background-color: var(--color-primary);
    height: 6.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  && .cartItems {
    width: 100%;
    background-color: var(--color-grey-0);
    max-width: 36.5rem;
    height: 15.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
  }
`;
