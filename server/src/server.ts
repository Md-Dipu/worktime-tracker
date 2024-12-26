import app from './app';

import 'colors';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`.blue.bold);
});
