import express from 'express';
import { getHomePage, getDetailPage } from '../controllers/homeController';

const router = express.Router();

const initWebRouter = (app) => {
    router.get('/', getHomePage);

    router.get('/about', (req, res) => {
        res.send('about');
    });

    router.get('/detail/user/:id', getDetailPage);

    return app.use('/', router);
};

export default initWebRouter;
