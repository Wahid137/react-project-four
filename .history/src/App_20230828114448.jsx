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
  background-color: red;
`;
const TopContainer = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }
  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;
