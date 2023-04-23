const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:5173'}})

const PORT = 4009

io.on('connection', socket => {
  console.log('Usuário conectado!', socket.id);

  socket.on('userName', userName => {
    socket.data.userName = userName
    console.log(socket.data.userName)
  })

  socket.on('disconnect', reason => {
    console.log('Usuário desconectado!', socket.id)
  })

  socket.on('message', text => {
    socket.broadcast.emit('receive_message', {
      text,
      author: {name: socket.data.userName, id: socket.id}
    })
  })
})


server.listen(PORT, () => console.log('Server running...'))