import styled from "styled-components";

export const CartTotalStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 34.5rem;
  height: 12.2rem;

  gap: 1.6rem;
  padding: 2rem 1rem;

  border-top: 0.2rem solid var(--color-grey-20);

  background-color: var(--color-grey-0);

  && div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 1.4rem;
  }
`;
