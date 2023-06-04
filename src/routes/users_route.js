import express from 'express'
import Connect from '../data/sql/connect.js';
import User_Dao from '../daos/users_dao.js';

const router = express.Router();

const db = new Connect()
const dao = new User_Dao()

router.get("/users",async(req,res)=>{
    try{
        db.start_connection()

        const result = await dao.find_all()
        console.log(result)
        res.status(200).send(result)
        db.close_connection()

    }catch (err) {
        res.status(500).json({message:err.message});
        db.close_connection()
    }
})

router.post("/users",async(req,res)=>{
    try {
        db.start_connection()
        let result = await dao.insert(req.body['nome'],req.body['idade'])
        res.status(201)
        db.close_connection()

    } catch (err) {
        res.status(500).json({message:err.message});
        db.close_connection()
    }
})

router.put("/users/:id",async(req,res)=>{
    try {
        const id = req.params.id
        db.start_connection()
        const result = await dao.update(id,req.body["nome"],req.body["idade"])
        res.status(201).json(result) 
        db.close_connection()
  
    } catch (err) {
        res.status(500).json({message:err.message});
        db.close_connection()
    }
    



})



export default router