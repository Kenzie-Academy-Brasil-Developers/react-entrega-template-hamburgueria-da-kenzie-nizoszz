import styled from "styled-components";

export const CartCardStyled = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 34.3rem;
  height: 8rem;
  gap: 1rem;

  && img {
    height: 100%;
    object-fit: cover;
    background-color: var(--color-grey-20);
    border-radius: 0.5rem;
  }

  && div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;
  }
`;

export const ButtonRemoveStyled = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 0;
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-50);

  cursor: pointer;
`;
