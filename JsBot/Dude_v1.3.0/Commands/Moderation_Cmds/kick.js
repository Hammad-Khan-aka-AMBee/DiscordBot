//exports.run = async (client, message, args, color, prefix) => {const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers
        
    ]
})
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
  module.exports={
    name: 'kick',
    description : 'the kick command',
    execute(message, args){  
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	try {
	if (message.member.hasPermission("KICK_MEMBERS")) {
	 if (message.mentions.users.size != 0) {
          if (message.mentions.members.first().kickable) {
          message.mentions.members.first().kick().then(m => {
          message.channel.send(`**${m.user.username}** has been kicked from **${message.guild.name}**. Bye bye!`);
          	});
        	} 
	  else {
          message.channel.send(`**${message.mentions.user.first().username}** is too priveledged for me to kick.`);
        	}
      		} 
	  else {
          message.channel.send('Please tag the user you would like to kick.')
      		}
    		} 
	  else {
	  message.channel.send(`**${message.author.username}**, You do not have permission to kick. You must have the \`Kick Members\` permission.`);
    		}
	  } 
	catch (err) {
	message.channel.send(`Either I am unable to kick **${message.mentions.users.first().username},** or I do not have permission to kick members.`);
	}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
}
  }
/*
exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "kick",
    description: "kick member you want",
    usage: "kick <@user>"
}
*/
