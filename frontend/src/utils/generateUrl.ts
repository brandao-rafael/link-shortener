import 'dotenv/config';
import axios from 'axios';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3005';

interface IUrlInfo {
  originalUrl: string,
  customWord: string,
}

const generateUrl = async (urlInfo: IUrlInfo) => {
  const response = await axios.post(`${BASE_URL}/shorten`, urlInfo);
  if (response.status != 201) {
    return response.data.message;
  }
  return response.data;
}

export default generateUrl;
