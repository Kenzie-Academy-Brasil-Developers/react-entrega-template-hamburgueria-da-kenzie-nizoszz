import styled from "styled-components";

export const ProductLi = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 29.6rem;
  height: 34.2rem;
  border: 0.2rem solid var(--color-grey-20);

  && .img-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15rem;
    background-color: var(--color-grey-0);
  }

  && div > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  && .description-content {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    padding: 2.3rem 2rem;
  }
`;
