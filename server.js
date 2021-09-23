'use strict';

const express = require('express')
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = process.env.PORT || 3000;

const app = express();

// Add GET /health-check express route
app.get('/health-check', (req, res) => {
  res.status(200).send('OK');
});

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

httpServer.listen(PORT);

