
const routePrincipal = require('./routes/principal')

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use("/ceoo",routePrincipal)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 