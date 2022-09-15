const authSocket = require('./middleware/authSocket')

const registerSocketServer = (server) => {
  const io = require('socket.io')(server, {
    cors: {
      origin: '*',
      methods: ['get', 'post'],
    },
  })

  io.use((socket, next) => {
    authSocket(socket, next)
  })

  io.on('connection', (socket) => {
    console.log('user connected')
    console.log(socket.id)
  })
}

module.exports = {
  registerSocketServer,
}