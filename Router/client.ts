import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

router.get('/clients/', clientsController.index); 
router.get('/clients/:id', clientsController.show); 



router.get('/clients/create', clientsController.create);
router.post('/clients/create', clientsController.store); // Para processar os dados do formulário

router.get('/clients/edit/:id', clientsController.edit);
router.post('/clients/edit/:id', clientsController.update);

router.get('/clients/del/:id', clientsController.del);


export default router;