const Event = require('../models/event.model');

async function handleCreateEvent(payload, socket) {
  const newEvent = new Event({ type: 'CREATE', payload });
  await newEvent.save();
  socket.emit('response', { success: true, data: newEvent });
}

async function handleUpdateEvent(payload, socket) {
  const { id, updateData } = payload;
  const updatedEvent = await Event.findByIdAndUpdate(id, updateData, { new: true });
  if (updatedEvent) {
    socket.emit('response', { success: true, data: updatedEvent });
  } else {
    socket.emit('error', { message: 'Event not found' });
  }
}

async function handleDeleteEvent(payload, socket) {
  const { id } = payload;
  const deletedEvent = await Event.findByIdAndDelete(id);
  if (deletedEvent) {
    socket.emit('response', { success: true, data: deletedEvent });
  } else {
    socket.emit('error', { message: 'Event not found' });
  }
}

async function handleFetchEvent(payload, socket) {
  const events = await Event.find(payload.filter || {});
  socket.emit('response', { success: true, data: events });
}

function handleBroadcastEvent(io, payload) {
  io.emit('broadcast', { type: 'BROADCAST', payload });
}

module.exports = {
  handleCreateEvent,
  handleUpdateEvent,
  handleDeleteEvent,
  handleFetchEvent,
  handleBroadcastEvent,
};
