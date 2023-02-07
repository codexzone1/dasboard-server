const express = require('express')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const helmet = require('helmet')

app.use(express.json())
app.use(helmet())   
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(cors())
const uri = 'mongodb+srv://first:first123@cluster0.yocravh.mongodb.net/?retryWrites=true&w=majority'
dotenv.config();

const { MongoClient } = require("mongodb");
const client = new MongoClient(uri);

app.get('/jsondata', async (req,res)=>{
    const database = client.db('mapdata')
    const movies = database.collection('maps')
    const movie = await movies.find({}).limit(47).toArray();
    res.send(movie)
});


app.listen(process.env.PORT,()=>{
    console.log('connect')
})