const express = require('express')
const app = express()
const ConnectDatabase = require('./db');
const port = 4000

ConnectDatabase();
app.use(express.json());
// app.post('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/u/auth',require('./Router/Auth'));
app.use('/u/repo',require('./Router/Repo'));
app.use('/u/annouce',require('./Router/Annouce'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})