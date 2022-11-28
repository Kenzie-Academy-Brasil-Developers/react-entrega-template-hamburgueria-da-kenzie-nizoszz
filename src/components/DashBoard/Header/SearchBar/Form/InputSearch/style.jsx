import styled from "styled-components";

export const InputSearchStiled = styled.input`
  outline: none;
  border: none;
  width: 100%;
  max-width: 20rem;
  height: 4rem;
  &&::placeholder {
    font-size: 1.6rem;
    font-weight: 400;
    color: var(--color-grey-20);
  }
`;
