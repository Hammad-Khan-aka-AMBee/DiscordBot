const Discord = require('discord.js')

module.exports={
    name: 'shutdown',
    description : 'ShutsDown the Bot',
    execute(message, args){
        if (message.content === '!shutdown'){        
	let owner = "637598340154130432"
        if (!owner)
        return message.channel.send(" You are not authorized to perform to this command, I am sorry I can't facilitate you now");

        try {
            await message.channel.send(" I am going to take a little Rest")
            process.exit()
        } catch(e){
            message.channel.send(`Error: ${e.message}`)
        }

    }
}
}