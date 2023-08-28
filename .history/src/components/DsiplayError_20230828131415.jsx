import { styled } from "styled-components";

const DsiplayError = () => {
  return (
    <ErrorContainer>
      <div>
        <h1>Unable to Fetch Data</h1>
      </div>
    </ErrorContainer>
  );
};

export default DsiplayError;

const ErrorContainer = styled.div`
  h1 {
    color: red;
  }
`;
