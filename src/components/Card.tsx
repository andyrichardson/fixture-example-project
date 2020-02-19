import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: ${props => props.theme.darkGrey};

  h1 {
    margin-top: 0;
  }

  h1 + * {
    margin-top: 0;
  }
`;
