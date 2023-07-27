import React from "react";
import IShortUrlResultProps from "~/interfaces/iShortUrlResultProps";
import { H3, IconButton, Img, ResultContent, Span } from "./styles/result";
import copyIcon from "../assets/icon/copy_icon.png";
import { toast } from "react-toastify";

const ShortUrlResult: React.FC<IShortUrlResultProps> = ({ result }) => {
  return (
    <ResultContent>
      This is your short URL:
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText(result);
          toast("Link copied!");
        }}
      >
        <Span>
          <H3 id="shortUrl">{result}</H3>
          <Img src={copyIcon.src} alt="Copy Icon" />
        </Span>
      </IconButton>
    </ResultContent>
  );
};

export default ShortUrlResult;
