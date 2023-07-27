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
        <H2>Hello, please insert the URL and the desired name in the fields below</H2>
        <Subtitle>In the first field, you need to put the URL you want to shorten; in the second field, you put a name to be included in your short link.</Subtitle>
      </HeadlineContent>
      <InputContent>
        <Input
          name="originalUrl"
          placeholder="Enter the URL you want to shorten"
          onChange={handleChange}
          value={urlInfo.originalUrl}
          id="originalUrl"
        />
        <Input
          name="customWord"
          placeholder="Enter the name you want in the encrypted link"
          onChange={handleChange}
          value={urlInfo.customWord}
          id="linkName"
        />
      </InputContent>
      <Button
        type="button"
        onClick={() => submit(urlInfo)}
        disabled={!isValid}
      >
        Submit!
      </Button>
    </Container>
  )
}

export default Content;