import { styled } from "styled-components";
import { Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodContainer>
      <Container>
        <FoodCards>
          {data.map(({ name, image, text, price }) => {
            <FoodCard key={name}>
              <div>
                <img src={image} alt="" />
              </div>
            </FoodCard>;
          })}
        </FoodCards>
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

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;
