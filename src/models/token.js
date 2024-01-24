const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
	userId: {
		type: String,
		required: true,
		ref: "user",
		unique: true,
	},
	token: { type: String, required: true, },
	
});

const tokenModel = mongoose.model("token", tokenSchema);
  
module.exports=tokenModel;
