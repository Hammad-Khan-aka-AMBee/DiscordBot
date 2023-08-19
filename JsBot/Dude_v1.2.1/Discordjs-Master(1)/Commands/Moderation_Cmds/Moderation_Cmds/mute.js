//exports.run = async (client, message, args) => {
    const client = require('discord.js')
module.exports={
    name: 'mute',
    description : 'Mute Cmd',
    execute(message, args){
            if (message.content.startsWith('!mute')){
                //if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, you need \`MUTE_MEMBERS\` Permission to use this commands**!`).then(msg=>msg.delete(7000));
                //if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, I need the following permission to \`mute\` command to work: \`MANAGE_ROLES\`**`).then(msg=>msg.delete(7000));
                let id = args[0];

                let member = message.mentions.members.first() || message.guild.members.id;
                if (!member) return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`);
                
                let muterole = message.guild.roles.cache.find(x => x.name === "Muted");
                if (!muterole) {
                    try {/*message.guild.roles.create({
                        data: {name: "My Role"}
                    }).then(role => {
                        message.channel.send(`${role.name} created!`);
                    });*/
                        muterole =  message.guild.roles.create({
                            name: "Muted",
                            color: '#000000',
                            permission: [] 
                            });
                message.guild.channels.cache.forEach(async (channel, id) => {
                     //channel.overwritePermissions
                    await message.channel.overwritePermissions([
                        {
                           id: message.author.id,
                           deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
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

    if (member.roles.cache.has(muterole.id)) return message.channel.send(`**${member.user.username}** Has already muted.`)
    //(member.addRole(muterole.id));
    member.roles.add(muterole);
    //muterole.add(member)
        message.channel.send(`**${member.user.username}, Has been muted**.`);
}
    }
}
/*
exports.conf = {
    aliases: []
}

exports.help = {
    name: "mute",
    description: "Mute someone annoying",
    usage: "mute @mention"
}
*/
/*This is my mute command

if(command === "mute") {
let reason = args.slice(1).join(' ');
let user = message.mentions.users.first();
let logchannel = message.guild.channels.find('name', 'cgr420-logs');

if (!logchannel) return message.reply('I cannot find a logs channel');
if (!message.member.hasPermission("MUTE_MEMBERS")) return 
message.reply(":no_entry_sign: **Error:** You don't have the **Mute Members** 
permission!");
if (reason.length < 1) return message.reply('You must supply a reason for the 
mute.');
if (message.mentions.users.size < 1) return message.reply('You must mention 
someone to mute them.').catch(console.error);

if (!message.guild.member(user).bannable) return 
message.reply(`:no_entry_sign: I cannot mute that member`);
message.guild.member(user).ban();

const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .addField('Action:', 'Mute')
  .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Moderator:', 
  `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  message.channel.send(`:hammer: Bippity boppity **MUTED**! I\'ve logged the 
  mute in the logs channel.`)
  return client.channels.get(logchannel.id).send({embed});
  };
 */