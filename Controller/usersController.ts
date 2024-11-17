import { Request, Response } from "express";
import { IUsers } from "../Model/users";
import usersModel from "../Model/usersModel";

function login(req: Request, res: Response, next: any) {
    res.render('login');
}
async function checklogin(req: Request, res: Response, next: any) {
    const login = req.body as IUsers;
    console.log("Dados recebidos:", login);

    try {
        let logado = await usersModel.findOne({
            where: {
                user: login.user,
                password: login.password
            }
        });
    
        if (logado != null) {
            res.redirect("/clients");
            process.env.APP_LOGIN = '1';
        } else {
            
            res.render('login', {login: 0});
            
            
        }
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }


    
}


export default { login, checklogin };