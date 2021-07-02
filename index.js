import routes from './src/route'
import express from "express"
import path from "path"

const app = express()
const PORT = process.env.PORT || 1000

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname+'/views/index.html'));
})

app.use(routes)

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})

