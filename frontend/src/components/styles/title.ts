import styled from "styled-components";
import colors from "~/styles/colors";

const Div = styled.div`
  background-color: ${colors.light};
  width: 100vw;
`;

const Title = styled.h1`
  text-align: center;
`;

export {
  Title,
  Div,
};