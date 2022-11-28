import styled from "styled-components";

export const ProductUl = styled.ul`
  width: 100%;
  max-width: 94rem;
  max-height: 73.5rem;

  display: flex;
  flex-wrap: wrap;

  gap: 2rem;

  margin-top: 3.1rem;
  @media (max-width: 700px) {
    flex-wrap: inherit;
    max-width: 36.5rem;
    overflow-x: scroll;

    &&::-webkit-scrollbar {
      appearance: none;
      width: 5px;
    }
  }
`;

export const SearchResultStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;
