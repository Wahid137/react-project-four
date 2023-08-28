import { styled } from "styled-components";

export const BASE_URL = "http://localhost:9000";

function App() {
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="../src/assets/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search Food" />
          </div>
        </TopContainer>
      </Container>
    </>
  );
}

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
`;
