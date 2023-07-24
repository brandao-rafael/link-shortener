import React, { useState } from "react";
import { Button, Container, Description, H2, HeadlineContent, Input, InputContent } from "./styles/content";

const Content: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    originalUrl: '',
    customWord: '',
  });


  return (
    <Container>
      <HeadlineContent>
        <H2>Please insert the information bellow</H2>
        <Description>You need insert the custom word to be in your url and the original url to be redirect</Description>
      </HeadlineContent>
      <InputContent>
        <Input placeholder=" original url" />
        <Input placeholder=" your custom word" />
      </InputContent>
      <Button>
        Submit!
      </Button>
    </Container>
  )
}

export default Content;