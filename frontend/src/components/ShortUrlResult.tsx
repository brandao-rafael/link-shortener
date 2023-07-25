import React from "react";
import IShortUrlResultProps from "~/interfaces/iShortUrlResultProps";
import { H3, IconButton, Img, ResultContent, Span } from "./styles/result";
import copyIcon from '../assets/icon/copy_icon.png';
import { toast } from "react-toastify";

const ShortUrlResult: React.FC<IShortUrlResultProps> = ({ result }) => {
  return (
    <ResultContent>
      This is your encurted url:
      <IconButton onClick={() => {
        navigator.clipboard.writeText(result);
        toast('link copied!');
      }}>
        <Span>
          <H3>{result}</H3>
          <Img src={copyIcon.src} alt="copy Icon" />
        </Span>
      </IconButton>
    </ResultContent>
  );
}

export default ShortUrlResult;