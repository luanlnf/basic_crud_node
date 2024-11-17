import { Router } from "express";
import produtosController from "../Controller/produtosController";

const router = Router();

router.get('/produtos', produtosController.produtos);
router.get('/produtos/create', produtosController.create);
router.post('/produtos/create', produtosController.store);

router.get('/produtos/edit/:id', produtosController.edit);
router.post('/produtos/edit/:id', produtosController.update);

router.get('/produtos/del/:id', produtosController.del);

export default router;