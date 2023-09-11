const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers
        // ...
    ]
})
//const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'removerole',
  description: 'Remove a role from a user (admins and mods only)',
  execute(client, message, args) {
    // Check if the command was used in a guild (server)
 //   if (!message.guild) {
  //    return message.channel.send('This command can only be used in a server.');
   // }

    // Check if the user running the command has permission (admin/moderator)
//   if (!message.member.permissions.has('ADMINISTRATOR') && !message.member.roles.cache.some(role => role.name === 'Moderator')) {
 //     return message.channel.send('You do not have permission to use this command.');
   // }
//if(!message.member.permissions.has(["KICK_MEMBERS"]))
    // Get the mentioned user or user by ID
  let id = args[0];
 const roleName = args.join(' ');

                let member = message.mentions.members.first() || message.guild.members.id;
                if (!member) return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`);
                
                let role = message.guild.roles.cache.find(x => x.name === roleName);

//    let member = message.mentions.members.first() || message.guild.members.id;

    // Check if a valid target user was provided
 //   if (!member) {
 //     return message.channel.send('Please mention a user or provide their ID to remove a role from.');
 //   }

    // Remove the target user from the args
//    args.shift();

    // Join the remaining arguments to get the role name
 //   const roleName = args.join(' ');

    // Check if the role exists; if not, create it
//    let role = message.guild.roles.cache.find(r => r.name === roleName);
    // Check if the target user already has the role
    if (!target.roles.cache.has(role.id)) {
      return message.channel.send('The user does not have this role.');
    }

    // Remove the role from the target user
    try {
      member.roles.remove(role);
      const successEmbed = new EmbedBuilder()
        .setColor('GREEN')
        .setTitle('Role Removed')
	.setAuthor({ name: ` ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`})
	.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})
        .setDescription(`Removed role ${roleName} from ${target.user.tag}`)
        .setTimestamp();
      message.channel.send({ embeds: [successEmbed] });
    } catch (error) {
      console.error(error);
      return message.channel.send('Failed to remove the role.');
    }
  }
}


/*
    if (!role) {
      try {
        role = message.guild.roles.create({
          data: {
            name: roleName,
            color: 'RANDOM', // You can customize the role color
          },
        });
      } catch (error) {
        console.error(error);
        return message.channel.send('Failed to create the role.');
      }
    }
*/



/*
client = require('discord.js');
module.exports={
    name: 'removerole',
description : ' Removes the certain role from the member',
execute(message, args){
        if (message.content.startsWith('!removerole')){
            let id = args[0];
                    
            //if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username}, Sorry, you need \`MANAGE_ROLES\` Permission to use this commands**!`).then(msg=>msg.delete(7000));
            //if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, I need the following permission to \`mute\` command to work: \`MANAGE_ROLES\`**!`).then(msg=>msg.delete(7000));

            let member = message.mentions.members.first()// || message.guild.members.id;
            
            if (!member) return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`).then(msg=>msg.delete(7000));
            
            let remrole = message.guild.roles.cache.find(x => x.name === id);
            if (!member.roles.cache.has(remrole.id)) return message.channel.send(`**${member.user.username} does not have this role**.`).then(msg=>msg.delete(7000));
            member.roles.remove(remrole);
            message.channel.send(`The role has succesfully been taken from the **${member.user.username}  with some Sad Regards.**`);
        }
}
}
*/