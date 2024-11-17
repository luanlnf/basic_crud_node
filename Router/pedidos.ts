import { Router } from "express";
import pedidosController from "../Controller/pedidosController";

const router = Router();

router.get('/pedidos', pedidosController.ExebirTodos);
router.get('/pedidos/novo', pedidosController.novoPedido);

router.get('/pedidos/:id', pedidosController.exibirPedidos);
router.post('/pedidos/novo', pedidosController.adicionarPedido);

router.get('/pedidos/editar/:id', pedidosController.editarPedidos);
router.post('/pedidos/editar/:id', pedidosController.atualizarPedidos);

router.get('/pedidos/excluir/:id', pedidosController.excluirPedidos);

export default router;