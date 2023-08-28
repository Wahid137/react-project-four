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
  display: flex;
  width: 1440px;
  padding: 85px 20px 31px 120px;
  justify-content: space-between;
  align-items: center;
  gap: 54px;
`;
