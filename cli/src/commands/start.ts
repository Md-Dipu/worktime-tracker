import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const startCommand = async () => {
  try {
    const token = process.env.TOKEN;
    if (!token) {
      console.error('You need to login first.');
      return;
    }

    const response = await axios.post(
      `${process.env.API_URL}/worktime/start`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log('Work session started:', response.data);
  } catch (error) {
    console.error(
      'Error starting work session:',
      (error as { response: { data?: object } }).response?.data ||
        (error as { message: string }).message
    );
  }
};

export default startCommand;
