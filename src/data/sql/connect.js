import sequelize from "./connection_config.js";



class Connect{
    start_connection(){
        sequelize.authenticate().then(() =>{
            console.log('Connecton has been established successfully')
        }).catch((error)=>{
            console.log('Unable to connect to the database: ' ,error)
        })
    }

    close_connection(){
        sequelize.close().then(()=>{
            console.log('Connection has been closed')
        }).catch((error)=>{
            console.log(`An error occurred ${error}`)
        })
    }


}



export default Connect