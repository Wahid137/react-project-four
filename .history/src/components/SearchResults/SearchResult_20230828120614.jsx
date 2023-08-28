import { styled } from "styled-components";
import { Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
      <Container></Container>
    </FoodContainer>
  );
};

export default SearchResult;

const FoodContainer = styled.div`
  min-height: calc(100vh - 210px);
  background-image: url("../../assets/bg.png");
  background-size: cover;
  background-color: red;
`;
