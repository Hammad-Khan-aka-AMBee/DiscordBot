//exports.run = async (client, message, args) => {
client = require('discord.js');
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
    module.exports={
        name: 'mutent',
    description : ' Un Mute Cmd',
    execute(message, args){
//✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧           
		if (message.content.startsWith('!mutent')){
                let id = args[0];
                //let logchannel = message.guild.channels.find('name', 'cgr420-logs');
                //let role = message.guild.roles.cache.find('name', 'Muted')
                
                //if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username}, Sorry, you need \`MANAGE_ROLES\` Permission to use this commands**!`).then(msg=>msg.delete(7000));
                //if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, I need the following permission to \`mute\` command to work: \`MANAGE_ROLES\`**!`).then(msg=>msg.delete(7000));

                let member = message.mentions.members.first()// || message.guild.members.id;
                
                if (!member) 
		return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`)
		.then(msg=>msg.delete(7000));
                
                let muterole = message.guild.roles.cache.find(x => x.name === 'Muted');
		//let botrole = message.guild.roles.cache.find(x => x.name === 'humanified');
                if (!member.roles.cache.has(muterole.id)) 
		return message.channel.send(`**${member.user.username} Not muted yet**.`).then(msg=>msg.delete(7000));
                //console.log( muterole.id, member.id)
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
                member.roles.remove(muterole);
                message.channel.send(`**${member.user.username} Has been unmuted**.`);
            }
    }
}
/* 
NO ID MUTE
NO BOT CHECKING
NO ROLE CREATE AND ASSSIGN BY ID
NO PERM CHECK FOR MUTE N UNMUTE
*/

