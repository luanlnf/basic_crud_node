import { Request, Response } from "express";
import { IPedidos } from "../Model/pedidos";
import pedidosModel from "../Model/pedidosModel";


async function ExebirTodos(req: Request, res: Response, next: any) {
    const pedidos = await pedidosModel.findAll();
    res.json(pedidos);

}
async function exibirPedidos(req: Request, res: Response, next: any) {
    //res.render('index');
    const pedidos = await pedidosModel.findByPk(req.params.id);
    res.json(pedidos);

}

function novoPedido(req: Request, res: Response, next: any) {
    res.render('novoPedido');
}


async function adicionarPedido(req: Request, res: Response, next: any) {
    console.log("Dados recebidos no formulário:", req.body); // Verifique se 'nome' e 'email' aparecem corretamente
        const pedido = req.body as IPedidos;
        await pedidosModel.create({ ...pedido });
        res.redirect('/pedidos');
    

}

async function editarPedidos(req: Request, res: Response, next: any) {
    //res.render('index');
    const pedido = await pedidosModel.findByPk(req.params.id);

    res.render("editarPedidos", {pedido: pedido});

}
async function atualizarPedidos(req: Request, res: Response, next: any) {
    await pedidosModel.update(req.body as IPedidos, {
        where: { id: req.params.id }
    })

    res.redirect('/pedidos');

}
async function excluirPedidos(req: Request, res: Response, next: any) {
    await pedidosModel.destroy({
        where: { id: req.params.id }
    })
    res.redirect('/pedidos');

}
export default { ExebirTodos, exibirPedidos, novoPedido, adicionarPedido, editarPedidos, atualizarPedidos, excluirPedidos };