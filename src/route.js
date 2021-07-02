import { getAlbumById } from "./controller";
import express from 'express'

const route = express.Router()

route.get("/:id", getAlbumById)

export default route 