import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 1400px) {
    width: 100%;
    max-width: 1375px;
    margin: 0 auto;
    padding: 10px;
  }
  @media (max-width: 1399px) {
    width: 100%;
    max-width: 1175px;
    margin: 0 auto;
    padding: 10px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    max-width: 975px;
    margin: 0 auto;
    padding: 10px;
  }

  @media (max-width: 1000px) {
    width: 100%;
    max-width: 775px;
    margin: 0 auto;
    padding: 10px;
  }

  @media (max-width: 800px) {
    width: 100%;
    max-width: 575px;
    margin: 0 auto;
    padding: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
    padding: 10px;
  }
`;
