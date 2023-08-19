module.exports={
name: 'server',
description : 'serverinfo',
execute(message, args){
message.channel.send(`This server's name is: ${message.guild.name}
\nTotal members: ${message.guild.memberCount}
\nGuild Region: ${message.guild.region}`)},
};