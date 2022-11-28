import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  gap: 6.5rem;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
