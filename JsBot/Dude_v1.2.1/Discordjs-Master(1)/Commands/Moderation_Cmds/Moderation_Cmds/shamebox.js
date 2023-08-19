
const client = require('discord.js')
module.exports={
    name: 'shame on you',
    description : 'a ShameBox Cmd',
    execute(message, args){
            if (message.content.startsWith('!shame')){
                //if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, you need \`MUTE_MEMBERS\` Permission to use this commands**!`).then(msg=>msg.delete(7000));
                //if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, I need the following permission to \`mute\` command to work: \`MANAGE_ROLES\`**`).then(msg=>msg.delete(7000));
                let id = args[0];

                let member = message.mentions.members.first()// || message.guild.members.id;
                if (!member) return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`);
                
                let ShameBox = message.guild.roles.cache.find(x => x.name === "Shame_On_You");
                if (!ShameBox) {
                    try {/*message.guild.roles.create({
                        data: {name: "My Role"}
                    }).then(role => {
                        message.channel.send(`${role.name} created!`);
                    });*/
                        ShameBox =  message.guild.roles.create({
                            name: "Shame_On_You",
                            color: '#00ff99',
                            permission: [] 
                            });
                message.guild.channels.cache.forEach(async (channel, id) => {
                     //channel.overwritePermissions
                    await message.channel.overwritePermissions([
                        {
                           id: message.author.id,

                           //more permission like see channels
                           deny: ['SEND_MESSAGES', 'ADD_REACTIONS','READ_TEXT_CHANNELS_&_SEE_VOICE_CHANNELS, CONNECT', 'SPEAK', 'VIDEO'],
                        },
                      ]);
                    /*muterole, [{
                        
                        SEND_MESSAGES: false,
                        ADD_REACTION: false,
                        CONNECT: false
                    }]);*/
                });
        }   catch(e) {
                console.log(e.message);
        }
    };

    if (member.roles.cache.has(muterole.id)) return message.channel.send(`**${member.user.username}** Has already JAILED.`)
    //(member.addRole(muterole.id));
    //muterole.add(member)
    member.roles.add(ShameBox)
        message.channel.send(`**${member.user.username}, Has been Jailed**.`);
}
    }
}
/* 
a little have been completed but still need to give channel perms for this role to see channels and see message history
allowance to use my bot's dm
dm allowance 
*/