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