import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const viewCommand = async (options: { date?: string }) => {
  try {
    const token = process.env.TOKEN;
    if (!token) {
      console.error('You need to login first.');
      return;
    }

    const query = options.date ? `?date=${options.date}` : '';
    const response = await axios.get(
      `${process.env.API_URL}/worktime/logs${query}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log('Worktime Logs:', response.data);
  } catch (error) {
    console.error(
      'Error fetching logs:',
      (error as { response: { data?: object } }).response?.data ||
        (error as { message: string }).message
    );
  }
};

export default viewCommand;
