import routes from './src/route'
import express from "express"
import path from "path"


const app = express()
const PORT = process.env.PORT || 1000

app.use((request, response, next) => {

  res.setHeader('Access-Control-Allow-Origin', 'https://nellychallenge1.web.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();

})
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname+'/views/index.html'));
})


app.use(routes)

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})

