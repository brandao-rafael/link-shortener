import React from 'react';
import ShortenerHomePage from './ShortenerHomePage';
import GlobalStyle from '~/styles/globalStyle';


const Main: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ShortenerHomePage />
    </>
  );
};

export default Main;