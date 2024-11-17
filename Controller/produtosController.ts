import e, { Request, Response } from "express";
import produtosModel from "../Model/produtoModel";
import {IProdutos} from "../Model/produtos";

async function produtos(req: Request, res: Response, next: any) {
    if(process.env.APP_LOGIN == '1'){
        const produtos = await produtosModel.findAll();
        res.render("produtos", {produtos: produtos});
    } else {
        res.end("Login não efetuado, Pagina inacessivel");
    }
}
async function show(req: Request, res: Response, next: any) {
    
    const produto = await produtosModel.findByPk(req.params.id);
    res.json(produto);

}

function create(req: Request, res: Response, next: any) {
    res.render('produtosNew');
}


async function store(req: Request, res: Response, next: any) {
    let produto = req.body as IProdutos;
    await produtosModel.create({ ...produto });
        res.redirect('/produtos');
}
async function edit(req: Request, res: Response, next: any) {
    
    const produto = await produtosModel.findByPk(req.params.id);
    res.render("editarProduto", {produto: produto});

}
async function update(req: Request, res: Response, next: any) {
    await produtosModel.update(req.body as IProdutos, {
        where: { id: req.params.id }
    })

    res.redirect('/produtos');
}

async function del(req: Request, res: Response, next: any) {
    await produtosModel.destroy({
        where: { id: req.params.id }
    })
    res.redirect('/produtos');

}
export default { produtos, show, create, edit, store, update, del };