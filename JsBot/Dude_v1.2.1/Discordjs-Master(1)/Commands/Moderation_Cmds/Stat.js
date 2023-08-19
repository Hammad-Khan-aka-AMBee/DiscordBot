const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { MessageEmbed, version } = require('discord.js');
const db = require('quick.db');

module.exports={
    name: 'stats',
    description : 'server-stats',
    execute(message, args) {
        

    let guildsEval      =   `${message.guild.name}`    //  client.shard.broadcastEval('this.guilds.size')
    let channelsEval    =   `${message.guild.channel}`    //  client.shard.broadcastEval('this.channels.size')
    let usersEval       =   `${message.guild.memberCount}`   //  client.shard.broadcastEval('this.users.size')
    //let voiceEval       =   `${message.guild.voicechannel}`    //  client.shard.broadcastEval('this.voiceConnections.size')
    //let botGuilds       =   `${message.guild.bots}`   //  guildsEval.reduce((prev, val) => prev + val)
    //let botChannels     =   `${message.guild.botChannels}`    //  channelsEval.reduce((prev, val) => prev + val)
    //let botUsers        =       //  usersEval.reduce((prev, val) => prev + val)
    let commandUsage    =  db.fetch('commandUsage');
    let messageRead     =  db.fetch('messageRead');
    
	const embed = new MessageEmbed()
	.setColor('#00ff99')
	.setAuthor(`Doodle's statistics`, message.author.displayAvatarURL)
	.setThumbnail(message.author.displayAvatarURL) 
	.setDescription('\`\`\`A statistics monitoring module. Contains essential information regarding our service and bot information. Wrapped with beautiful Discord.js Interactive Library and RichEmbed amazing Constructor. Made with ❤️ by Lul Support Team.\`\`\`')
	//.addField('Owners', '\`\`\`• Sharif#9781\n• Riichi_Rusdiana#6815\n• MazureFinnson#5492\`\`\`')
	//.addField('Special thanks', '\`\`\`• 12042#5754\`\`\`') 
    .addField('Server information', `\`\`\`• Operating System: Enterprise Linux 7\n• Kernel: 4.18.0-34-Enterprise\n• Processor: Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz\n• Architecture: x86_x64\n• Node.js: ${process.version}\n• Discord.js: v${version}\n• `)//Websocket: ${client.ping.toFixed(2)}ms\`\`\``) 
    //.addField('General information', `\`\`\`• Guilds name:${guildsEval} \n Channels:${channelsEval} \n Users:${usersEval} \n`  )
	//.addField('General information', `\`\`\`• Guilds: ${botGuilds.toLocaleString()}\n• Channels: ${botChannels.toLocaleString()}\n• Users: ${botUsers.toLocaleString()}\n• Uptime: ${client.util.parseDur(client.uptime)}\`\`\``)
	//.addField('Readed information', `\`\`\`• Message Read: ${messageRead.toLocaleString()}\n• Commands Ran: ${commandUsage.toLocaleString()}\`\`\``) 
    //.addField('Usage information', `\`\`\`• Memory usage:\n${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap\n\n• CPU usage:\nNode: ${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%\nSystem: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%\`\`\``)
	.addField('Usage information', `\`\`\`• Memory usage:\n${(process.memoryUsage().rss / 1024 / 1024)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024)} MB Heap\n\n• CPU usage:\nNode: ${(process.cpuUsage().user / 1024 / 1024)}%\nSystem: ${(process.cpuUsage().system / 1024 / 1024)}%\`\`\``)
    .setFooter(`Request by: ${message.author.tag} | Doodle v1.0.0`);
	
	message.channel.send(embed);


},
}