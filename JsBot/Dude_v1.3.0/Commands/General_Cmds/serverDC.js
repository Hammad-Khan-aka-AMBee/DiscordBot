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
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
module.exports={
    name: 'server',
    description : 'Information about the server',
async execute(message, args, Discord, client) {
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧    
        
		// THIS INFO WILL GO INTO CONFIGURATION FILE
//	let guildsEval		=	`${message.guild.name}`    
//	let channelsEval	=	`${message.guild.channelCount}`   
	const channelCount	=	`${message.guild.channels.cache.size}`;
//	const vchannelCount	=	`${message.guild.voicechannels.cache.size}`;
//	let usersEval 		=	`${message.guild.memberCount}` 
//	let owner 		=		
	const guild = message.guild;
	const owner = await guild.fetchOwner();
	const ownerProfile = owner.user;
	const ownerAvatar = ownerProfile.displayAvatarURL();
	const serverAvatar = guild.iconURL();
	const vcChannels = guild.channels.cache.filter((channel) => channel.type === 'GUILD_VOICE').size;
	const textChannels = guild.channels.cache.filter((channel) => channel.type === 'GUILD_TEXT').size;
	const forums = guild.channels.cache.filter((channel) => channel.type === 'GUILD_PUBLIC_THREAD').size;
	const threads = guild.channels.cache.filter((channel) => channel.type === 'GUILD_PRIVATE_THREAD').size;
	const roles = guild.roles.cache.size;
	const boosts = guild.premiumSubscriptionCount;
	//const moderators = roles.filter((role) => role.permissions.has('KICK_MEMBERS')).size;
	const serverLink = 'https://discord.gg/C8yKeff7YH'//'https://discord.gg/sXfGMj9cdX'; // Replace with your server's invite link
	const creationDate = guild.createdAt.toDateString();
	const emojis =  guild.emojis.cache.size;
        const id = guild.id;
        const humans = guild.members.cache.filter(member => !member.user.bot).size;
        const bots = guild.members.cache.filter(member => member.user.bot).size;
        const online = guild.members.cache.filter(member => !member.user.bot && member.presence && member.presence?.status !== 'offline').size;
        const offline = guild.members.cache.filter(member => !member.user.bot && member.presence && member.presence.status === 'offline').size;


	const serverInfoEmbed = new EmbedBuilder()
  	.setAuthor({ name: ` ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`})
  	.setColor('#3498db')
  	.setTitle(`${guild.name} Server Info`)
  	.setDescription(`[Join ${guild.name}](https://discord.gg/C8yKeff7YH)`)
	.setThumbnail('https://cdn.discordapp.com/attachments/734438955822350346/1149936827155873932/Cafe.gif')
  	.addFields({name:'Owner',value: ownerProfile.tag,inline: true})
	.addFields({name:'Server ID', value: guild.id, inline:true})
  	.addFields({name:'Creation Date', value: creationDate,inline: true})
  	.addFields({name:'Members', value: `${guild.memberCount}`,inline: true})
  	.addFields({name:'Boosts', value: `${boosts}`,inline: true})
  	.addFields({name:'Text Channels', value: `${channelCount}`,inline: true})
  	.addFields({name:'Voice Channels',value:  `${vcChannels}`,inline: true})
  	.addFields({name:'Forums', value: `${forums}`,inline: true})
  	.addFields({name:'Threads', value: `${threads}`,inline: true})
  	.addFields({name:'Roles', value: `${roles}`,inline: true})
  	.addFields({name:'Emojis', value: `${emojis}`,inline: true})
  	.addFields({name:'Humans', value: `${humans}`,inline: true})
 	.addFields({name:'Online', value: `${online}`,inline: true})
  	.addFields({name:'Offline', value: `${offline}`,inline: true})
  	.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})
  	.addFields({name:'Server Link',value:'[Join D.CAFé](https://discord.gg/C8yKeff7YH)' ,inline: true});
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	message.channel.send({ embeds: [serverInfoEmbed] });
}}