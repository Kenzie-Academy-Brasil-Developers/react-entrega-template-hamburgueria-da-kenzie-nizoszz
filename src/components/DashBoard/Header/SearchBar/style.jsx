import styled from "styled-components";

export const SearchBarStyled = styled.div`
  width: 100%;
  max-width: 32.7rem;
  height: 56px;
  padding: 0rem 1rem 0rem 1.5rem;
  border: 0.2rem solid var(--color-grey-20);
  border-radius: 0.8rem;
  background-color: var(--background);

  &&:hover {
    border-radius: 0.8rem;
    border: 0.2rem solid var(--color-grey-100);
  }
`;
