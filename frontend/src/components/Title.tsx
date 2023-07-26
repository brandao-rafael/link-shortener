import React from "react";
import { Div, Subtitle, Title } from "./styles/title";

const TitleContainer: React.FC = () => {
  return (
    <Div>
      <Title>Welcome to our Link Shortener</Title>
      <Subtitle>It's just another simple URL shortener</Subtitle>
    </Div>
  )
}

export default TitleContainer;