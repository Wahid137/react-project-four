import { styled } from "styled-components";
import { Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
      <Container>
        <FoodCards>{{}}</FoodCards>
      </Container>
    </FoodContainer>
  );
};

export default SearchResult;

const FoodContainer = styled.div`
  min-height: calc(100vh - 210px);
  background-size: cover;
  background-color: red;
  background-image: url("/public/bg.png");
`;

const FoodCards = styled.div``;