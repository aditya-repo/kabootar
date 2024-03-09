const SMTPServer = require("smtp-server").SMTPServer
const server = new SMTPServer({

    allowInsecureAuth: true,
    authOptional: true,

    onConnect(session, cb){
        console.log('Connection is requested from session ID: ',session);
        cb()
    },

    onMailFrom(address, session, cb){
        console.log(`On Mail From : ${address.address}, session ID: ${session.id}`);
        cb()
    },

    onRcptTo(address, session, cd){
        console.log(`onRcptTo`, address.address, session.id)
        cb()
    },
    onData(stream, session, cb){
        stream.on('data', (data)=> console.log(`onData ${data.toString()}`))
        stream.on('end', cb)
    }
})



server.listen(25, ()=>console.log("SMTP server is running on PORT 25"))