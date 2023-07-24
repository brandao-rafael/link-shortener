import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Content from '~/components/Content';
import TitleContainer from '~/components/Title';
import IUrlInfo from '~/interfaces/iUrlInfo';
import generateUrl from "~/utils/generateUrl";

const ShortenerHomePage: React.FC = () => {

  const [shortUrl, setShortUrl] = useState('');

  const submit = async (urlInfo: IUrlInfo):Promise<void> => {
    const response = await generateUrl(urlInfo);
    console.log(response);
    if(typeof response === 'string') {
      toast(response);
    } else {
      setShortUrl(response.data.shortUrl);
    }
  }
  
  return (
    <div>
      <TitleContainer />
      <Content submit={submit} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default ShortenerHomePage;
