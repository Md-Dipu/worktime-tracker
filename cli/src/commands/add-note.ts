import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const addNoteCommand = async (sessionId: string, note: string) => {
  try {
    const token = process.env.TOKEN;
    if (!token) {
      console.error('You need to login first.');
      return;
    }

    const response = await axios.post(
      `${process.env.API_URL}/worktime/notes`,
      { sessionId, note },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log('Note added/updated:', response.data);
  } catch (error) {
    console.error(
      'Error adding/updating note:',
      (error as { response: { data?: object } }).response?.data ||
        (error as { message: string }).message
    );
  }
};

export default addNoteCommand;
