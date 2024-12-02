const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./database/mongoose");
const setupSocket = require("./socket");
const eventRoutes = require("./routes/event.routes");

const PORT = 3000;
const app = express();
app.use(express.json());
const server = http.createServer(app);
//debugging
app.use("/api/events", eventRoutes);
const io = new Server(server);
async function startServer() {
  await connectDB();
  setupSocket(io);
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Error starting server:", err);
  process.exit(1);
});
