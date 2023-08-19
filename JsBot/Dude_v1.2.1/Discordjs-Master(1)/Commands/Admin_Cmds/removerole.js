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