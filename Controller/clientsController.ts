import { Request, Response } from "express";
import { IClients } from "../Model/clients";
import clientModel from "../Model/clientModel";


async function index(req: Request, res: Response, next: any) {
    //res.render('index');
    const clients = await clientModel.findAll();
    res.json(clients);

}
async function show(req: Request, res: Response, next: any) {
    //res.render('index');
    const client = await clientModel.findByPk(req.params.id);
    res.json(client);

}

function create(req: Request, res: Response, next: any) {
    res.render('create');
}


async function store(req: Request, res: Response, next: any) {
    console.log("Dados recebidos no formulário:", req.body); // Verifique se 'nome' e 'email' aparecem corretamente
    let client = req.body as IClients;
    try {
        await clientModel.create({ ...client });
        res.redirect('/');
    } catch (error) {
        console.error("Erro ao inserir dados:", error);
        res.status(500).send("Erro ao inserir dados no banco.");
    }

}

async function edit(req: Request, res: Response, next: any) {
    //res.render('index');
    const client = await clientModel.findByPk(req.params.id);

    res.render("edit", {client: client});

}
async function update(req: Request, res: Response, next: any) {
    await clientModel.update(req.body as IClients, {
        where: { id: req.params.id }
    })

    res.redirect('/');

}
async function del(req: Request, res: Response, next: any) {
    await clientModel.destroy({
        where: { id: req.params.id }
    })
    res.redirect('/');

}
export default { index,create, store, show, edit, update, del };