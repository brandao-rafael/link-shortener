import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${colors.primary};
    font-family: 'MontserratThin', sans-serif;
  }
`

export default GlobalStyle;