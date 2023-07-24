import React, { useState } from "react";
import { Button, Container, H2, HeadlineContent, Input, InputContent } from "./styles/content";
import { Subtitle } from "./styles/title";

const Content: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    originalUrl: '',
    customWord: '',
  });


  return (
    <Container>
      <HeadlineContent>
        <H2>Hello, insert the url and the desired name in fields bellow</H2>
        <Subtitle>In first field you need to put the url you want short, in second you put a name to be in your encurted link.</Subtitle>
      </HeadlineContent>
      <InputContent>
        <Input placeholder="The url do you wan't shortener" />
        <Input placeholder="The name you want be in encurted link" />
      </InputContent>
      <Button>
        Submit!
      </Button>
    </Container>
  )
}

export default Content;