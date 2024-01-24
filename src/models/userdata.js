const { Int32 } = require('mongodb');
const mongoose=require('mongoose');

const userdataSchema = new mongoose.Schema({
    nam:{
      type: String,
      required: 'this feild is required.'
    },
    mail:{
      type: String,
       
    },
    nums:{
        type: Number,
         
      },
    pass:{
      type: String,
      required: 'this feild is required.'
    },
    conpass:{
      type: String,
      required: 'this feild is required.'
    },
    verified:{
      type:Boolean,
      default:false
    }
  });
  
  const userdataModel = mongoose.model('userdata',userdataSchema);
  
  module.exports=userdataModel;