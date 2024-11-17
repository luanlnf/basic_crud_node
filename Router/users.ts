import { Router } from "express";
import usersController from "../Controller/usersController";

const router = Router();

router.get('/', usersController.login); 
router.post('/', usersController.checklogin);


export default router;