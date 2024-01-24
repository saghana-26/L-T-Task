const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userdata=require('./src/models/userdata');
const path=require('path');
const Token=require('./src/models/token');
const sendEmail = require("./src/utils/sendemail" );
const crypto = require("crypto");

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use('/javascript', express.static(__dirname + 'public/js'))

require('./src/models/database');

app.set('views',path.join(__dirname, './src/views/pages'));
app.set('view engine','ejs')

const restRouter = require('./src/routes/main');
const userdataModel = require("./src/models/userdata");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/', restRouter);
app.use('/userdata', restRouter);
app.post('/',async(req,res)=>{
    let user = await userdataModel.findOne({mail : req.body.email});
    if (user)
    return res.send("User with given email is existing!");
    try{
         const pass=req.body.pd;
         const conpass=req.body.cpd;
        

         if(pass  === conpass ){
            const user= new userdata({
                nam: req.body.username,
                mail:req.body.email,
                nums:req.body.num,
                pass:pass,
                conpass:conpass

            })
            registered =await  user.save();

           const token =  new Token({
			userId: user._id,
			token: crypto.randomBytes(32).toString("hex"),
		});
        await token.save();
        console.log(token);
       /* const link = `http://localhost:8000/api/users/confirm/${token.token}`;
        await verifymail(registered.mail,link);
        res.status(200).send({
            message:"email send"
        })*/

		const url = `http://localhost:8000/users/${registered.id}/verify/${token.token}`;
        console.log(url)
		await sendEmail(registered.mail, "Verify Email", url);

		res.status(201).send("email sent");
           
          //res.status(201).send("success");
         }else{
            res.send("password not matching"); 
         }

         

      }catch(error){
        res.status(400).send(error);
    }
})
app.get("users/:id/verify/:token", async (req, res) => {
	try {
		const user = await user.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		await user.updateOne({ _id: user._id, verified: true });
		await token.remove();

		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


app.post("/login",async(req,res)=>{
    try{
           const email=req.body.email;
           const password=req.body.password;
           console.log(`${email} and password is ${password}`)
           const useremail=await userdataModel.findOne({mail:email});
         if(useremail){
           if(useremail.pass === password){
               res.status(201).render("home",{user:useremail});
           }else{
            res.render("password not matching");
           }}
        else{
            res.render("user not found"); 
        }
    }catch(error){
        res.status(400).send("invalid email")
    }
})


app.listen(8000, () => {
  console.log("listening to the server on http://localhost:8000");
});