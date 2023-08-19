const Discord = require('discord.js')

module.exports={
    name: 'shutdown',
    description : 'ShutsDown the Bot',
    execute(message, args){
        if (message.content === '!shutdown'){        let owner = ""
        if (!owner)
        return message.channel.send(" You are not authorized to perform to this command, I am sorry I can't facilitate you now");

        try {
            await message.channel.semd(" I am going to take a little Rest")
            process.exit()
        } catch(e){
            message.channel.send(`Error: ${e.message}`)
        }

    }
}
}