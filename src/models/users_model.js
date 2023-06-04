import { DataTypes } from "sequelize"
import sequelize from "../data/sql/connection_config.js"



const User = sequelize.define(
    'users_tb',{
        nome: {
            type: DataTypes.STRING,
            allowNull:false
        },
        idade: {
            type:DataTypes.INTEGER,
            allowNull:false
        }  

    },
    {
        tableName:'users_tb'
    }
)

export default User