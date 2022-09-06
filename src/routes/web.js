import express from 'express';
import {
    getHomePage,
    getDetailPage,
    createUser,
    deleteUser,
    editUser,
    saveEditUser,
} from '../controllers/homeController';

const router = express.Router();

const initWebRouter = (app) => {
    router.get('/', getHomePage);

    router.get('/about', (req, res) => {
        res.send('about');
    });

    router.get('/detail/user/:id', getDetailPage);

    router.post('/create', createUser);

    router.get('/edit/:id', editUser);
    router.post('/save-edit/:id', saveEditUser);

    router.post('/delete/:id', deleteUser);

    return app.use('/', router);
};

export default initWebRouter;
