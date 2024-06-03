import express from 'express';
const apiRouter = express.Router();

import {
    getArticles,
    postArticles
} from '../controller/api_controller';
apiRouter.get("/articles",getArticles)
apiRouter.post("/articles",postArticles)

module.exports = apiRouter;