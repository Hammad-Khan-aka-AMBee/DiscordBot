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
    name: 'dcserver',
    description : 'Information about the server',
async execute(message, args, Discord, client) {
    //execute(message, args) {
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧        

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
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
const serverInfoEmbed = new EmbedBuilder()
  .setAuthor({ name: ` ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`})
  .setColor('#3498db')
  .setTitle(`${guild.name} Server Info`)
  .setDescription(`[Join ${guild.name}](https://discord.gg/C8yKeff7YH)`)
//  .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`)//(serverAvatar)
  .setThumbnail('https://cdn.discordapp.com/attachments/734438955822350346/1149936827155873932/Cafe.gif')
  .addFields({name:'Owner',value: '<:D_Cafe_arrow_green:855447926461693962>dr4g0nn_0 ',inline: true})
  .addFields({name:'Previous Owner',value: '<:D_Cafe_arrow_green:855447926461693962>the_hot_man_bee',inline: true})
  .addFields({name:'Server ID', value: '<:D_Cafe_arrow_green:855447926461693962>732650949050630156', inline:true})
  .addFields({name:'Creation Date', value: '<:D_Cafe_arrow_green:855447926461693962>Tue Jul 14 2020',inline: true})
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
//  .addField('Moderators', moderators, true)/
  .addFields({name:'Server Link',value:'<:D_Cafe_arrow_blue:855448215637458974>[Join D.CAFé](https://discord.gg/C8yKeff7YH)' ,inline: true});
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
message.channel.send({ embeds: [serverInfoEmbed] });
}}

/*module.exports={
name: 'server',
description : 'serverinfo',
execute(message, args){

    const guild = message.guild;
    const owner =  guild.fetchOwner();
    const ownerProfile = owner.user;
    const ownerAvatar = ownerProfile.displayAvatarURL();
    const serverAvatar = guild.iconURL();
    const vcChannels = guild.channels.cache.filter((channel) => channel.type === 'GUILD_VOICE');
    const textChannels = guild.channels.cache.filter((channel) => channel.type === 'GUILD_TEXT');
    const forums = guild.channels.cache.filter((channel) => channel.type === 'GUILD_PUBLIC_THREAD');
    const threads = guild.channels.cache.filter((channel) => channel.type === 'GUILD_PRIVATE_THREAD');
    const roles = guild.roles.cache;
    const boosts = guild.premiumSubscriptionCount;
    const moderators = roles.filter((role) => role.permissions.has('KICK_MEMBERS'));
    const serverLink = 'https://discord.gg/sXfGMj9cdX' //`https://discord.com/invite/${guild.inviteCode}`;
    const creationDate = guild.createdAt.toDateString();

    const serverInfoEmbed = {
      title: `Server Info - ${guild.name}`,
      thumbnail: { url: serverAvatar },
      //image()//mention.user.displayAvatarURL({ format: 'png' , size : 4096}));
      fields: [
        //{ name: 'Owner', value: `${ownerProfile.name}\n`},//,${ownerAvatar}` },
        { name: 'Voice Channels', value: vcChannels.size.toString, inline: true },
        { name: 'Text Channels', value: textChannels.size.toString(), inline: true },
        { name: 'Forums', value: forums.size.toString(), inline: true },
        { name: 'Threads', value: threads.size.toString(), inline: true },
        { name: 'Roles', value: roles.size.toString(), inline: true },
        { name: 'Boosts', value: boosts.toString(), inline: true },
        //{ name: 'Moderators', value: moderators.map((role) => role.name).join(', ') },
        { name: 'Server Link', value: serverLink },
        { name: 'Creation Date', value: creationDate },
      ],
    };

    message.channel.send({ embeds: [serverInfoEmbed] });
  }

//message.channel.send(`This server's name is: ${message.guild.name}
//\nTotal members: ${message.guild.memberCount}
//\nGuild Region: ${message.guild.region}`)},
};*/