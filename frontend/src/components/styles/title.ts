import styled from "styled-components";
import colors from "~/styles/colors";

const Div = styled.header`
  background-color: ${colors.secondary};
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
  display: flex;
  flex-flow: column nowrap;
  height: 5rem;
  justify-content: space-around;
  margin-top: 2rem;
  text-align: center;
  width: 100%;
`;

const Title = styled.h1`
  color: ${colors.green};
`;

const Subtitle = styled.p`
  color: ${colors.light};
  font-family: 'MontserratRegular', sans-serif;
`;

export {
  Title,
  Div,
  Subtitle,
};