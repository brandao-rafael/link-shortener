import React, { ChangeEvent, useState } from "react";
import { Button, Container, H2, HeadlineContent, Input, InputContent } from "./styles/content";
import { Subtitle } from "./styles/title";
import IUrlInfo from "~/interfaces/iUrlInfo";

const Content: React.FC<{ submit: (urlInfo: IUrlInfo) => Promise<void> }> = ({ submit }) => {
  const [urlInfo, setUrlInfo] = useState({
    originalUrl: '',
    customWord: '',
  });
  const [isValid, setIsValid] = useState(false);

  const validateUrlInfo = () => {
    const regexUrl = RegExp(/^(https?:\/\/)(([\w.-]+)\.([a-zA-Z]{2,63})(:[0-9]{1,5})?)(\/[^\s]*)?$/);
    const isValidUrl = regexUrl.test(urlInfo.originalUrl);
    const isValidWord = urlInfo.customWord.length > 3;
    const isValid = isValidUrl && isValidWord;
    setIsValid(isValid);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setUrlInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateUrlInfo();
  }

  return (
    <Container>
      <HeadlineContent>
        <H2>Hello, insert the url and the desired name in fields bellow</H2>
        <Subtitle>In first field you need to put the url you want short, in second you put a name to be in your encurted link.</Subtitle>
      </HeadlineContent>
      <InputContent>
        <Input
          name="originalUrl"
          placeholder="The url do you wan't shortener"
          onChange={handleChange}
          value={urlInfo.originalUrl}
        />
        <Input
          name="customWord"
          placeholder="The name you want be in encurted link"
          onChange={handleChange}
          value={urlInfo.customWord}
        />
      </InputContent>
      <Button
        onClick={() => submit(urlInfo)}
        disabled={!isValid}
      >
        Submit!
      </Button>
    </Container>
  )
}

export default Content;