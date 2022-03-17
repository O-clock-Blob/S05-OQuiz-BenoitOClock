const dotenv = require("dotenv");
dotenv.config();

const dataMapper = require('./app/dataMapper');
const Level = require("./app/models/level");

/*
dataMapper.getAllLevels((err, levels)=>{
    console.log(err, levels)
})

Level.findAll((err, levels)=>{
    console.log(err, levels)
})
*/

dataMapper.getOneLevel(1, (err,level)=>{
    console.log(err,level)
})

Level.findById(1,(err,level)=>{
    console.log(err,level)
})