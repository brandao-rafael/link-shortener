import styled from "styled-components";
import colors from "~/styles/colors";

const Div = styled.header`
  background-color: ${colors.primary};
  display: flex;
  flex-flow: column nowrap;
  height: 5rem;
  justify-content: space-around;
  margin-top: 4rem;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  color: ${colors.green};
`;

const Subtitle = styled.p`
  color: ${colors.green};
  font-family: 'MontserratRegular', sans-serif;
`;

export {
  Title,
  Div,
  Subtitle,
};