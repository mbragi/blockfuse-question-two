# WebSocket and REST API Server

A backend server built with Express, Socket.IO, and MongoDB for handling real-time WebSocket events and REST API requests. The server listens for five specific WebSocket events and persists event data in the database using Mongoose.

---

## Features
- Establishes a WebSocket connection for real-time communication.
- Supports five WebSocket event types:
  - `CREATE`: Create a new event.
  - `UPDATE`: Update an existing event.
  - `DELETE`: Delete an event.
  - `FETCH`: Fetch events from the database.
  - `BROADCAST`: Broadcast an event to all connected clients.
- REST API for event retrieval.
- MongoDB integration for persistent storage.

---

## Prerequisites
- Node.js (v16+ recommended)


## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database:
   - The server connects to MongoDB at `mongodb://localhost:27017/events_db` by default.
   - Update the connection string in `database/mongoose.js` if needed.

---

## Running the Application
Start the server:
```bash
node server.js
```
The server runs on [http://localhost:3000](http://localhost:3000).

---

## WebSocket Events
### Client emits:
- **`CREATE`**: Create a new event.
  ```json
  {
    "type": "CREATE",
    "payload": {
      "field1": "value1",
      "field2": "value2"
    }
  }
  ```
- **`UPDATE`**: Update an existing event.
  ```json
  {
    "type": "UPDATE",
    "payload": {
      "id": "event_id",
      "updateData": { "field1": "new_value" }
    }
  }
  ```
- **`DELETE`**: Delete an event by ID.
  ```json
  {
    "type": "DELETE",
    "payload": {
      "id": "event_id"
    }
  }
  ```
- **`FETCH`**: Fetch all events or filter events.
  ```json
  {
    "type": "FETCH",
    "payload": {
      "filter": { "field1": "value1" }
    }
  }
  ```
- **`BROADCAST`**: Send a message to all connected clients.
  ```json
  {
    "type": "BROADCAST",
    "payload": {
      "message": "Hello everyone!"
    }
  }
  ```

### Server emits:
- **`response`**: Success response for specific events.
- **`error`**: Error messages for invalid or failed events.
- **`broadcast`**: Broadcast message sent to all connected clients.

---

## REST API Endpoints
- **GET /api/events**: Fetch all events.
  - Response:
    ```json
    {
      "success": true,
      "data": [/* Array of events */]
    }
    ```

---

## Technologies Used
- **Node.js**: Backend runtime.
- **Express.js**: REST API framework.
- **Socket.IO**: Real-time WebSocket communication.
- **MongoDB**: Database for persisting data.
- **Mongoose**: ODM for MongoDB.

## Author
Gar Manji Michael
