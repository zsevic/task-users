import { Router } from 'express';
import * as userController from './user.controller';

const routes = new Router();

routes.get('/', userController.getUserListHandler);

export default routes;
