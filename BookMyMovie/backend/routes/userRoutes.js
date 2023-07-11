import express from 'express';
import { getAllUsers, signup, updateUser, deleteUser, login, getBookingsOfUser } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/', getAllUsers)
userRouter.post('/signup', signup)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)
userRouter.post('/login',login)
userRouter.get('/bookings/:id', getBookingsOfUser)

export default userRouter 