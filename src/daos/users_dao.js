import User from "../models/users_model.js";

 
class User_Dao { 



async find_all(){
    try{
        const users = await User.findAll()
        return users;
    }catch(error){
        console.log(`ERROR RETRIEVING USERS: ${error}`)
        return error
    }
}

async insert(p_nome,p_idade){
    try{
        let user = await User.create({
            nome: p_nome,
            idade:p_idade
        })

        return user  
    }catch(error){
        console.log(`ERROR IN INSERTION ${error}`)
    }
}

async update(id,p_nome,p_idade){
    try{

        const item = await User.findByPk(id)

        if (!item) {
            return res.status(404).json({ message: 'User not found' });
          }

        let user_updated = await User.update({
            nome: p_nome,
            idade:p_idade
        },
        {where:{id:id}}
        )

        return user_updated  
    }catch(error){
        console.log(`ERROR IN INSERTION ${error}`)
    }
}


}


export default User_Dao




