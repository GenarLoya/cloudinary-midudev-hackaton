import axios from "axios";

export const convertImageToBase64 = async (url: string) => {
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    return base64Image;
};