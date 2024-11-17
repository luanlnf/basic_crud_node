import express, {urlencoded} from "express";
import clientsRouter from "./Router/client";
import usersRouter from "./Router/users";
import produtosRouter from "./Router/produtos";
import pedidosRouter from "./Router/pedidos";
import db from "./db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clientsRouter);
app.use(usersRouter);
app.use(produtosRouter);
app.use(pedidosRouter);
app.set('view engine', 'pug');
app.set('views', './Views');

db.sync().then(() => {
    console.log("Conectado ao banco: " + process.env.DB_NAME);
}).then(() => {
    console.log("Servidor criado...");
});

app.listen(process.env.PORT, () => {
console.log("Servidor criado...");
});
