const { MessageEmbed } = require('discord.js');

//exports.run = async (client, message, args, color, prefix) => {
module.exports= {
  name: 'invite',
  description : 'invites the bot',
  execute(message, args) {
  let embed = new MessageEmbed() 
  .setColor('#34ff99')
  .setDescription('**[Click Here](https://discordapp.com/oauth2/authorize?client_id=731809267266617368&scope=bot&permissions=8)** To Invite Me to your server!')
  message.channel.send(embed);

}
}
/*

bot perms = 1517419646 ?



exports.conf = {
    aliases: [],
    cooldown: "5"
}

exports.help = {
    name: "invite",
    description: "invite the bot to your server",
    usage: "invite"
}*/