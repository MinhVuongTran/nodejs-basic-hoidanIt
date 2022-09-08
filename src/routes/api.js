import express from 'express';
import { getAllUser, createUser, updateUser, deleteUser } from '../controllers/apiController';
const router = express.Router();

const initApiRouter = (app) => {
    router.get('/users', getAllUser);
    router.post('/create-user', createUser);
    router.put('/update-user/:id', updateUser);
    router.delete('/delete-user/:id', deleteUser);

    return app.use('/api/v1/', router);
};

export default initApiRouter;
