import db from "../db";
import sequelize from "sequelize";
import clientModel from "./clientModel";
import produtoModel from "./produtoModel";


export default db.define("pedido", {
id: {
    type: sequelize.INTEGER.UNSIGNED,  
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
},
id_cliente : {
    type: sequelize.INTEGER.UNSIGNED,  
    allowNull: false,
    references: {
        model: clientModel,
        key: 'id'
    }
},
id_produto: {
    type: sequelize.INTEGER.UNSIGNED,  
    allowNull: false,
    references: {
        model: produtoModel,
        key: 'id'
    }
},
quantidade: {
    type: sequelize.INTEGER.UNSIGNED,
    allowNull: false
}
});
