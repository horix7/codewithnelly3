import routes from './src/route'
import express from "express"

const app = express()
const PORT = process.env.PORT || 1000

app.use(routes)

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})
