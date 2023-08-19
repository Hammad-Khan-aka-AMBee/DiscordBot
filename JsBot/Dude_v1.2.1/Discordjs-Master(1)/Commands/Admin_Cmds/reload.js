const Discord = require('discord.js')

module.exports={
    name: 'reload',
    description : 'reloads the user cmd',
    execute(message, args){
        if (message.content.startsWith('!reload')){
        let owner = "";
        if(!owner) return 
        message.channel.send("You are Not the Owner, Sorry I can't execute this command");

        if(!args[0]) 
        return message.reply(" Master! I don't know the command to reload ")

        let commandName = args[0].toLowerCase();
        try {
            delete require.cache[require.resolve(`./${commandName}.js`)]
            Discord.Client.commands.delete(commandName)
            const pull = require(` ./${commandName}.js`)
            Discord.Client.set(commandName, pull)
        } catch(e){
            return message.channel.send(`I am unable to load : ${args[0].toUpperCase()}`)
        }

        message.channel.send(`The command ${args[0].toLowerCase()} has been Loaded `)
        


    }

}
}