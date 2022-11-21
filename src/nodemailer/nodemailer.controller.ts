import { Controller, Get } from '@nestjs/common';

@Controller('nodemailer')
export class NodemailerController {
    @Get()
    async send(){
        const nodemailer = require("nodemailer");
        let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'marty39@ethereal.email',
            pass: '7SSbjTJJNyvpkujByT'
        }
    });
    let info=await transporter.sendMail({
        from:"ub532710@gmail.com",
        to:"ua6802951@gmail.com",
        subject: "Hello :heavy_check_mark:",
        text: "This the first Email...",
    })
    console.log("Message sent: %s", info.response);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
}
