const { commaListsAnd } = require('common-tags');
const Discord = require('discord.js')

module.exports={
    name: 'restart',
    description : 'Restarts the Bot',
    execute(message, args){
        if (command.content === '!restart'){
        let owner = ""
        if (!owner)
        return message.channel.send(" You are not authorized to perform to this command, I am sorry I can't facilitate you now");

        try {
            await message.channel.semd(" I am going to take a little Rest")
            async ( await process.restart()
            ).then(process.run())
        } catch(e){
            message.channel.send(`Error: ${e.message}`)
        }

    }
}
}