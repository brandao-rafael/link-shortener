import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Content from '~/components/Content';
import TitleContainer from '~/components/Title';
import IUrlInfo from '~/interfaces/iUrlInfo';
import generateUrl from "~/utils/generateUrl";
import ShortUrlResult from '~/components/ShortUrlResult';

const ShortenerHomePage: React.FC = () => {

  const [shortUrl, setShortUrl] = useState('');

  const submit = async (urlInfo: IUrlInfo):Promise<void> => {
    toast('Loading...');
    const response = await generateUrl(urlInfo);
    if(typeof response === 'string') {
      toast.dismiss();
      toast(response);
    } else {
      setShortUrl(response.shortUrl);
      toast.dismiss();
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
        <ShortUrlResult result='http://url.short'/>
    </div>
  );
}

export default ShortenerHomePage;
