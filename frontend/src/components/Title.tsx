import React from "react";
import { Div, Title } from "./styles/title";

const TitleContainer: React.FC = () => {
  return (
    <Div>
      <Title style={{backgroundColor: 'white'}}>Welcome to our Link Shortener</Title>
    </Div>
  )
}

export default TitleContainer;