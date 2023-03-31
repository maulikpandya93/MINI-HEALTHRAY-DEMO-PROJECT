const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'mpandya8901@gmail.com',
        pass : 'suyjjuwmsjychnpd'
    }
})

const options = {
    from : 'mpandya8901@gmail.com',
    to : 'mpandya8901@gmail.com',
    subject : 'demo mail',
    text : 'hello'
} 

transport.sendMail(options, (err, info) => {
    if(err){
        console.log(`theres an error : ${err}`);
    }else{
        console.log(`response : ${info.response}`);
    }
})