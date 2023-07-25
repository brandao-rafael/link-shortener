import 'react-toastify/dist/ReactToastify.css';
import '../styles/fonts/fonts.css';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
