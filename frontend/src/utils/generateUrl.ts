import 'dotenv/config';
import axios from 'axios';
import IUrlInfo from '~/interfaces/iUrlInfo';

const BASE_URL = process.env.BE_BASE_URL;

const generateUrl = async (urlInfo: IUrlInfo) => {
  try {
    const response = await axios.post(`${BASE_URL}/shorten`, urlInfo);
    if (response.status != 201) {
      return response.data.message;
    }
    return response.data;
  } catch (error) {
    if(axios.isAxiosError(error)) {
      return error.message;
    }
    return 'Something gone wrong!'
  }
}

export default generateUrl;
