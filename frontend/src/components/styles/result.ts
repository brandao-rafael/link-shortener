import { styled } from "styled-components";
import colors from "~/styles/colors";

const ResultContent = styled.div`
  align-items: center;
  background-color: ${colors.secondary};
  color: ${colors.light};
  display: flex;
  justify-content: space-around;
  font-weight: bolder;
  margin: 10px auto;
  padding: 10px;
  width: 80%;
`;

const Span = styled.span`
  display: flex;
  justify-content: space-around;
`;

const H3 = styled.h3`
  color: ${colors.green};
  font-weight: lighter;
`;

const IconButton = styled.button`
  background-color: ${colors.primary};
  border: solid 2px ${colors.tertiary};
  border-radius: 5px;
  cursor: pointer;
  padding: 5px;
  width: 30%;
`;

const Img = styled.img`
  width: 15px;
`;

export {
  ResultContent,
  Span,
  H3,
  IconButton,
  Img,
};