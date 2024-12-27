import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const stopCommand = async () => {
  try {
    const token = process.env.TOKEN;
    if (!token) {
      console.error('You need to login first.');
      return;
    }

    const response = await axios.post(
      `${process.env.API_URL}/worktime/stop`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log('Work session stopped:', response.data);
  } catch (error) {
    console.error(
      'Error stopping work session:',
      (error as { response: { data?: object } }).response?.data ||
        (error as { message: string }).message
    );
  }
};

export default stopCommand;
