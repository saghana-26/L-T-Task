const mongoose=require("mongoose");


const uri="mongodb+srv://saghana:friends12@cluster0.tqdn9ye.mongodb.net/?retryWrites=true&w=majority"

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("contected to mongodb");
    }catch(error){
        console.error(error);
    }
}

connect();
require('./userdata');