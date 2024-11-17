import db from "../db";
import sequelize from "sequelize";

export default db.define("produto", {
id: {
    type: sequelize.INTEGER.UNSIGNED,  
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
},
nome: {
    type: sequelize.STRING,
    allowNull: false,
},
descricao: {
    type: sequelize.STRING,
    allowNull: false,
},
valor: {
    type: sequelize.INTEGER.UNSIGNED,
    allowNull: false
}
});