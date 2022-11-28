import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  height: 80px;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    height: inherit;
  }
`;

export const StyledHeaderFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 700px) {
    gap: 2rem;
    height: 13.9rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
