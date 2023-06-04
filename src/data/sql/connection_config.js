import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const username = process.env.USER_NAME
const password = process.env.PASSWORD





const sequelize = new Sequelize('users_db',username,password,{
    host:'localhost',
    dialect:'mysql'
})


export default sequelize