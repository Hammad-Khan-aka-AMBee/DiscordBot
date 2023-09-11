const { Client,Collection, GatewayIntentBits,EmbedBuilder,version } = require('discord.js')
const client = new Client({
    intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
//GatewayIntentBits.GuildMessageTyping,
//GatewayIntentBits.DirectMessages,
//GatewayIntentBits.DirectMessageReactions,
//GatewayIntentBits.DirectMessageTyping
]})
//client.commands = new Discord.Collection();
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
//const db = require('quick.db');
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
module.exports={
    name: 'stats',
    description : 'server-stats',
async execute(message, args, Discord, client) {
    //execute(message, args) {
        

    let guildsEval      =   `${message.guild.name}`    //  client.shard.broadcastEval('this.guilds.size')
    let channelsEval    =   `${message.guild.channelCount}`    //  client.shard.broadcastEval('this.channels.size')
    const channelCount =    `${message.guild.channels.cache.size}`;
    let usersEval       =   `${message.guild.memberCount}`   //  client.shard.broadcastEval('this.users.size')
    //let voiceEval       =   `${message.guild.voicechannel}`    //  client.shard.broadcastEval('this.voiceConnections.size')
    //let botGuilds       =   `${message.guild.bots}`   //  guildsEval.reduce((prev, val) => prev + val)
    //let botChannels     =   `${message.guild.botChannels}`    //  channelsEval.reduce((prev, val) => prev + val)
    //let botUsers        =       //  usersEval.reduce((prev, val) => prev + val)
    //let commandUsage    =  db.fetch('commandUsage');
    //let messageRead     =  db.fetch('messageRead');
    
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(`${message.guild.name}'s STAT COMMAND`)
	.setImage('https://media.discordapp.net/attachments/855790392742248458/1150036335378305044/86867938804de6a3.gif?width=288&height=144')//message.guild.display)// message.author.displayAvatarURL({dynamic: true ,  size: 4096}))
	//.setAuthor(message.author.displayAvatarURL({ format: 'png', size: 4096 }));)//`Doodle's statistics`, message.author.displayAvatarURL)
	.setAuthor({ name: ` ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`})
	.setThumbnail(message.author.displayAvatarURL({dynamic: true ,  size: 4096})) 
	.setDescription('\`\`\`A statistics monitoring module. Contains essential information regarding our service and bot information. Wrapped with beautiful Discord.js Interactive Library and RichEmbed amazing Constructor. Made with ❤️ by Lul Support Team.\`\`\`')
	//.addField('Owners', '\`\`\`• Sharif#9781\n• Riichi_Rusdiana#6815\n• MazureFinnson#5492\`\`\`')
	//.addField('Special thanks', '\`\`\`• 12042#5754\`\`\`') 
	.addFields({ name: 'Server information ', value: `• Operating System: Enterprise Linux 7\n• Kernel: 4.18.0-34-Enterprise\n• Processor: Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz\n• Architecture: x86_x64\n• Node.js: ${process.version}\n• Discord.js: v${version}\n• `, inline: true })

//Websocket: ${client.ping.toFixed(2)}ms
    //.addField('Server information', `\`\`\`• Operating System: Enterprise Linux 7\n• Kernel: 4.18.0-34-Enterprise\n• Processor: Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz\n• Architecture: x86_x64\n• Node.js: ${process.version}\n• Discord.js: v${version}\n• `)//Websocket: ${client.ping.toFixed(2)}ms\`\`\``) 
	.addFields({ name: 'General information', value: `• Guilds name:${guildsEval} \n Channels:${channelCount} \n Users:${usersEval} \n`, inline: true })
    //.addField('General information', `\`\`\`• Guilds name:${guildsEval} \n Channels:${channelsEval} \n Users:${usersEval} \n`  )
	//.addField('General information', `\`\`\`• Guilds: ${botGuilds.toLocaleString()}\n• Channels: ${botChannels.toLocaleString()}\n• Users: ${botUsers.toLocaleString()}\n• Uptime: ${client.util.parseDur(client.uptime)}\`\`\``)
	//.addField('Readed information', `\`\`\`• Message Read: ${messageRead.toLocaleString()}\n• Commands Ran: ${commandUsage.toLocaleString()}\`\`\``) 
	//.addFields({ name: 'Usage information', value:` • Memory usage:\n${(process.memoryUsage().rss / 1024 / 1024)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024)} MB Heap\n\n• CPU usage:\nNode: ${(process.cpuUsage().user / 1024 / 1024)}%\nSystem: ${(process.cpuUsage().system / 1024 / 1024)}%\`, inline: true })

    //.addField('Usage information', `\`\`\`• Memory usage:\n${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap\n\n• CPU usage:\nNode: ${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%\nSystem: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%\`\`\``)
	//.addField('Usage information', `\`\`\`• Memory usage:\n${(process.memoryUsage().rss / 1024 / 1024)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024)} MB Heap\n\n• CPU usage:\nNode: ${(process.cpuUsage().user / 1024 / 1024)}%\nSystem: ${(process.cpuUsage().system / 1024 / 1024)}%\`\`\``)
	.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	message.channel.send({ embeds: [embed] });


},
}