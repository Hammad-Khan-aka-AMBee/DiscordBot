const Discord = require('discord.js')

module.exports={
    name: 'Announcement',
    description : 'Lets the bot make an announcement in the specified channel',
    execute(message, args){
        if (message.content.startsWith('!Announce')){
            if(!message.member.hasPermission(["MANAGE_MESSAGES"]))
            return message.channel.send("I am sorry but you were not given the permission to use this command yet")

            let argsresult;
            let aChannel = message.mentions.channel.first();
            message.delete();

            if (aChannel){
                argsresult = args.slice(1).join(" ")
                aChannel.send(argsresult);
            }
            else argsresult= args.join(" ")
            message.channel.send(argsresult);

        }
    }
}