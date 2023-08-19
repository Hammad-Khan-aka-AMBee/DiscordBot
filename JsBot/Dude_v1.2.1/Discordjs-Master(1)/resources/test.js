const Discord = require('discord.js');

module.exports={
    name: 'test',
    description : 'test cmd',
    execute(message, args){
        const Uban_embed = new Discord.MessageEmbed()
        .setTitle('test')
        .addField('Tested by', message.author)


        if  (message.content.startsWith('!test')) {
            message.channel.send(Uban_embed);
        }
        

    }}