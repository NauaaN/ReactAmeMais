import multer from "multer";
import { Router } from "express";

const server= Router();
const upload= multer({dest: 'storage/fotosPets'});

export default server;

