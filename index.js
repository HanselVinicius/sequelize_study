import express from "express";
import router from "./src/routes/users_route.js";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json({ limit: "200mb",extended: true }));
app.use(express.urlencoded({ extended: true, limit: "200mb" }));



app.use("/",router)

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})