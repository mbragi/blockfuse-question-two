const {
  handleCreateEvent,
  handleUpdateEvent,
  handleDeleteEvent,
  handleFetchEvent,
  handleBroadcastEvent,
} = require("./controllers/event.controller");

function setupSocket(io) {
  io.on("connection", (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("event", async (data) => {
      try {
        const { type, payload } = data;

        if (!type || !payload) {
          socket.emit("error", { message: "Invalid event format" });
          return;
        }

        // Handle different event types
        switch (type) {
          case "CREATE":
            await handleCreateEvent(payload, socket);
            break;
          case "UPDATE":
            await handleUpdateEvent(payload, socket);
            break;
          case "DELETE":
            await handleDeleteEvent(payload, socket);
            break;
          case "FETCH":
            await handleFetchEvent(payload, socket);
            break;
          case "BROADCAST":
            handleBroadcastEvent(io, payload);
            break;
          default:
            socket.emit("error", { message: "Unknown event type" });
        }
      } catch (err) {
        console.error("Error processing event:", err);
        socket.emit("error", { message: "Internal server error" });
      }
    });

    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
}

module.exports = setupSocket;
