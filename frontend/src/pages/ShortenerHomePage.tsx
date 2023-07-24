import React from 'react';
import Content from '~/components/Content';
import TitleContainer from '~/components/Title';

const ShortenerHomePage: React.FC = () => {
  return (
    <div>
      <TitleContainer />
      <Content />
    </div>
  );
}

export default ShortenerHomePage;
