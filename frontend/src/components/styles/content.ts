import styled from "styled-components";
import colors from "~/styles/colors";

const Container = styled.main`
  align-items: center;
  background-color: ${colors.secondary};
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  height: 25rem;
  margin: 2.5% auto 0;
  padding: 2rem;
  text-align: center;
  width: 80%;
`;

const HeadlineContent = styled.div`
  color: ${colors.green};
  margin: -1.5rem 0 1.5rem 0;
  position: static;
`;

const H2 = styled.h2`
  margin: 0 0 1rem 0;
`;

const InputContent = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  @media only screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

const Input = styled.input`
  background-color: ${colors.secondary};
  color: ${colors.light};
  border: none;
  border-bottom: 2px solid ${colors.light};
  font-size: 15px;
  height: 2rem;
  width: 45%;
  @media only screen and (max-width: 450px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: ${colors.green};
  color: ${colors.secondary};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'MontserratRegular', sans-serif;
  font-weight: bolder;
  height: 2rem;
  transition: all ease-in-out 300ms;
  width: 80%;
  &:hover {
    background-color: ${colors.secondary};
    border: solid 2px ${colors.green};
    color: ${colors.green};
    transition: all ease-in-out 300ms;
  }
  &:disabled {
    background-color: ${colors.tertiary};
    color: ${colors.gray};
    cursor: none;
    &:hover {
      border: none;
    }
  }
`;

export {
  Container,
  HeadlineContent,
  H2,
  InputContent,
  Input,
  Button,
}

