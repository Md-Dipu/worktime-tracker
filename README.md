# **Worktime Tracker Application**

## **Overview**

The **Worktime Tracker** is a client-server application designed to track work sessions, store work logs, and manage user data. It allows users to start, stop, and view their work sessions via a command-line interface (CLI). The backend is powered by an Express.js API, while MongoDB is used to store session data and user information.

- **Client**: CLI Application (written in TypeScript)
- **Server**: Express.js API (written in TypeScript)
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JWT-based authentication for users

---

## **Features**

### **1. User Management**

- **Register** a new user with a unique username and password.
- **Login** to obtain a JWT token for authenticated actions.

### **2. Work Session Tracking**

- **Start** a new work session.
- **Stop** the ongoing work session and calculate the duration.
- **View** work logs for a specific date or date range.

### **3. Notes Management**

- **Add** or **Update** notes for work sessions.
- **Delete** notes from completed work sessions.
- **View** session logs along with their notes.

---

## **Technologies Used**

- **Frontend**: TypeScript (CLI application)
- **Backend**: Express.js (API)
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Token)

---

## **Installation**

### **1. Clone the Repository**

```bash
git clone https://github.com/Md-Dipu/worktime-tracker.git
cd worktime-tracker
```

### **2. Install Dependencies**

**Server**:

```bash
cd server
npm install
```

**Client**:

```bash
cd client
npm install
```

### **3. Environment Configuration**

Create `.env` files for both client and server.

**Server**: Create `.env` file in `server/` folder.

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/worktime-tracker
JWT_SECRET=your_jwt_secret
```

**Client**: Create `.env` file in `client/` folder.

```bash
API_URL=http://localhost:5000/api
TOKEN=
```

---

## **Usage**

### **1. Start the Server**

```bash
cd server
npx ts-node src/server.ts
```

### **2. Use the CLI Client**

```bash
cd client
npx ts-node src/client.ts <command>
```

### **3. Available Commands**

| Command       | Description                             | Example Command                                              |
| ------------- | --------------------------------------- | ------------------------------------------------------------ |
| `register`    | Register a new user                     | `npx ts-node src/client.ts register`                         |
| `login`       | Login to get a token                    | `npx ts-node src/client.ts login`                            |
| `start`       | Start a work session                    | `npx ts-node src/client.ts start`                            |
| `stop`        | Stop the active work session            | `npx ts-node src/client.ts stop`                             |
| `view`        | View work logs                          | `npx ts-node src/client.ts view --date 2024-12-26`           |
| `add-note`    | Add or update a note for a work session | `npx ts-node src/client.ts add-note <sessionId> "Note text"` |
| `delete-note` | Delete a note for a work session        | `npx ts-node src/client.ts delete-note <sessionId>`          |

---

## **API Endpoints**

### **User Authentication**

| Method | Endpoint             | Description           | Request Body             |
| ------ | -------------------- | --------------------- | ------------------------ |
| POST   | `/api/auth/register` | Register a new user   | `{ username, password }` |
| POST   | `/api/auth/login`    | Login and get a token | `{ username, password }` |

### **Work Sessions**

| Method | Endpoint              | Description              | Request Body           |
| ------ | --------------------- | ------------------------ | ---------------------- |
| POST   | `/api/worktime/start` | Start a new work session | None                   |
| POST   | `/api/worktime/stop`  | Stop the current session | None                   |
| GET    | `/api/worktime/logs`  | View worktime logs       | Optional query: `date` |

### **Notes Management**

| Method | Endpoint              | Description                  | Request Body          |
| ------ | --------------------- | ---------------------------- | --------------------- |
| POST   | `/api/worktime/notes` | Add or update a note         | `{ sessionId, note }` |
| DELETE | `/api/worktime/notes` | Delete a note from a session | `{ sessionId }`       |

---

## **Data Models**

### **User Model**

```typescript
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
```

### **WorkSession Model**

```typescript
const WorkSessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  duration: { type: Number },
  note: { type: String },
});
```

---

## **Contributing**

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

---

## **Future Improvements**

- Implement work session analytics (weekly summary, idle time analysis).
- Add export functionality for work logs (e.g., CSV export).
- Implement a graphical user interface (GUI) for managing work sessions.

---

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
