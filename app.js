const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('Express is listening!')
})

const port = 3000
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
