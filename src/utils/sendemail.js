const nodemailer = require("nodemailer");
const Mail = require("nodemailer/lib/mailer");

/*module.export=async(email,link)=>{
    try {
		let transporter = nodemailer.createTransport({
			service:"Gmail",
            auth: {
				user: 'saghanaraj06@gmail.com',
				pass: 'saghana1234',
			},
        });
         await transporter.sendMail({
            from:'saghanaraj06@gmail.com',
            to:email,
            subject:"account verification",
            text:"welcome",
            html:`
            <div>
              <a href=${link}>click here to activate account</a>
            </div>
            `
        });
        
        console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
*/


module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			service: "Gmail",
			port:587,
			secure: true,
			auth: {
				user: "saghanaraj06@gmail.com",
				pass: "wuqm tubu ylpr njmb",
			},
		});

		await transporter.sendMail({
			from: "saghanaraj06@gmail.com",
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};
