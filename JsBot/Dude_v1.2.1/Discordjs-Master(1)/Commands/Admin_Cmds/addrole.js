const client = require('discord.js')
module.exports={
    name: 'addrole',
    description : 'Add a role Cmd',
    execute(message, args){
            if (message.content.startsWith('!addrole')){
               try{ //if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, you need \`MUTE_MEMBERS\` Permission to use this commands**!`).then(msg=>msg.delete(7000));
                //if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, I need the following permission to \`mute\` command to work: \`MANAGE_ROLES\`**`).then(msg=>msg.delete(7000));
                let id = args[0];

                let member = message.mentions.members.first()// || message.guild.members.id;
                if (!member) return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`);
                
                let addedrole = message.guild.roles.cache.find(x => x.name === id);
                if (!addedrole) 
                return message.reply(" Master the role you mentioned does not exist or I am unable to find it")
                
            }   catch(e) {
                    console.log(e.message);
        }
    };

    if (member.roles.cache.has(addedrole.id)) return message.channel.send(`**${member.user.username}** has the role already`)
    //(member.addRole(muterole.id));
    member.add(addedrole)
        message.channel.send(`**${member.user.username}, Has been given the role and its permissions and accessibilities**.`);
}
    }
