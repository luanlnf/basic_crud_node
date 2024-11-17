import db from "../db";
import sequelize from "sequelize";

export default db.define("users", {
id: {
    type: sequelize.INTEGER.UNSIGNED,  
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
},
user: {
    type: sequelize.STRING,
    allowNull: false,
},
password: {
    type: sequelize.STRING,
    allowNull: false,
}
});