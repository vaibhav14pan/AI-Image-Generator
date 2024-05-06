import express from "express";
import {dummyResponse,generateImage} from "../controller/imageController.js"
const ImageRouter = express.Router();

ImageRouter.get("/",dummyResponse);
ImageRouter.post("/",generateImage);

export default ImageRouter;