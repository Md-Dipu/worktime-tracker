import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const deleteNoteCommand = async (sessionId: string) => {
  try {
    const token = process.env.TOKEN;
    if (!token) {
      console.error('You need to login first.');
      return;
    }

    const response = await axios.delete(
      `${process.env.API_URL}/worktime/notes`,
      {
        headers: { Authorization: `Bearer ${token}` },
        data: { sessionId },
      }
    );
    console.log('Note deleted:', response.data);
  } catch (error) {
    console.error(
      'Error deleting note:',
      (error as { response: { data?: object } }).response?.data ||
        (error as { message: string }).message
    );
  }
};

export default deleteNoteCommand;
