
const routePrincipal = require('./routes/principal')

const express = require('express')
const app = express()
const port = 3000

app.use("/ceoo",routePrincipal)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 