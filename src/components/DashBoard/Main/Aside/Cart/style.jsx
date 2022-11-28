import styled from "styled-components";

export const CartUl = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 32rem;
  background-color: var(--color-grey-0);
  width: 100%;
  max-width: 34.5rem;
  padding: 2rem 1rem;
  gap: 2.1rem;

  &&::-webkit-scrollbar {
    appearance: none;
    width: 0;
  }
`;
