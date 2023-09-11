// ██████████████████████████████ Initialization and imports █████████████████████████████████████████████████████████
const Sequelize = require('sequelize');
const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = require('../config.json');
const prefix = '!';
const client = new Client({
    intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildBans,]})

// ██████████████████████████████ Database Initialize █████████████████████████████████████████████████████████

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'databaseXPNew.sqlite',
});

// ██████████████████████████████ Database Definition █████████████████████████████████████████████████████████

const XP = sequelize.define('User', {
		
	
	serverName:	Sequelize.STRING,
	serverId:	{
    			type: Sequelize.STRING,
   			allowNull: false,
//   			unique: true,
//   			primaryKey: true,

  			},
	userId:		{
   		 	type: Sequelize.STRING,
    			allowNull: false,
 //   			unique: true,
 //   			primaryKey: true,

 			},
	userName: 	Sequelize.STRING,
	xp:		{
    			type: Sequelize.INTEGER,
    			defaultValue: 0,
    			allowNull: false,
  			},
	goldenxp:	{//necessary because directly corelated with WPs 
    			type: Sequelize.INTEGER,
    			defaultValue: 0,
   		 	allowNull: false,
  			},
	level:		{
    			type: Sequelize.INTEGER,
    			defaultValue: 1,
    			allowNull: false,
  			},
/*	globalLevel:	{
    			type: Sequelize.INTEGER,
    			defaultValue: 0,
    			allowNull: false,
  			},
*/	
});


// ██████████████████████████████ Discord Initialize  █████████████████████████████████████████████████████████

client.once(Events.ClientReady, async(message) => {
	await XP.sync();
	console.log('Levels Synced and Online');
});

// █████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████

client.on('messageCreate', async (message) => {
		if (message.author.bot) return;
		const msg = message.content;
		const args = message.content.slice(prefix.length).trim().split(/ +/);
		const commandName = args.shift().toLowerCase();
		let user = await XP.findOne({ where: { serverId: message.guild.id, userId: message.author.id } });
//		user.forEach(xp => user.set(xp.userId, xp))
		if (!user) {
    		user = await XP.create({ serverId: message.guild.id,	serverName: message.guild.name,			userId: message.author.id, userName: message.author.username, xp:1 });
  		}
		user.increment('xp')
		console.log(user.get('xp'))

		let lvl = user.get('level')
		let xp = user.get('xp')
		let ex = 5 * (lvl ^ 2) + 50 * lvl + 100 - xp
		if (xp >= ex){
			user.increment('level')
    			message.channel.send(`<:tada:><:emoji_41:854998868742504458> | ${message.author.tag} You've leveled up to \`${lvl + 1}\`🎉<:emoji_41:854998868742504458>`);
			}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
		if(commandName === 'xp'){
		message.channel.send(`<:D_Cafe_forward_yellow:854062707505102918> ${message.author.tag} has sent ${user.get('xp')} messages in server ${message.guild.name}<:D_Cafe_backward:854062900300480532> `)
		}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
		else if (commandName === 'level'){
		message.channel.send(`<:D_Cafe_forward_green:854061875066961960>${message.author.tag} is on ${user.get('level')} Level<:D_Cafe_backward:854062900300480532>`)
		}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
//code for rank
		else if (commandName === 'rank'){
		return message.channel.send(
				'wait for rank'
			)
		}

//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
//code for golden xp

//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
//code for leaderboard
		if (commandName === 'glb') {
		//const file = new AttachmentBuilder('../assets/discordjs.png');
		
  			try {
    			const topUsers = await XP.findAll({
      			attributes: ['userId', 'level','serverName', 'userName','xp'],
      			order: [['level', 'DESC']],
      			limit: 10,
    			});

    			const leaderboard = topUsers.map((user, position) => `(${position + 1})${client.users.cache.get(user.userId)?.tag ?? 'Unknown User'}\n <:D_Cafe_arrow_blue:855448215637458974>  ${user.userName} has ${user.level} Levels and ${user.xp} messages in ${user.serverName}`).join('\n');

		const exampleEmbed = new EmbedBuilder()
	//	.setURL(`[ ${message.guild.name}](https://discord.gg/C8yKeff7YH)`)
		.setTitle('<:D_Cafe_diamond_yellow:854059808080658472>Global XP LeaderBoard<:D_Cafe_diamond_yellow:854059808080658472>')
		.setThumbnail('https://cdn.discordapp.com/attachments/734438955822350346/1149936827155873932/Cafe.gif')
		.setDescription(`Leaderboard:\n${leaderboard}`, { code: true })
		.setColor('#FFFF00')
		.setImage()
		.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})

    		//message.channel.send(`Leaderboard:\n${leaderboard}`, { code: true });
		message.channel.send({ embeds: [exampleEmbed]})//, files: [file] });
  			} catch (error) {
    			console.error('Error fetching leaderboard:', error);
    			message.channel.send('An error occurred while fetching the leaderboard.');
  			}
		}

//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
//code for global leaderboard
		if (commandName === 'xlb') {
  			try {
    			const serverId = message.guild.id; // Get the server ID
    			const topUsers = await XP.findAll({
      			attributes: ['userId', 'level','serverName', 'userName','xp'],
      			where: { serverId }, // Filter results by serverId
      			order: [['level', 'DESC']],
      			limit: 10,
    			});

    			const leaderboard = topUsers.map((user, position) => `(${position + 1})${client.users.cache.get(user.userId)?.tag ?? 'Unknown User'}\n <:D_Cafe_arrow_green:855447926461693962>  ${user.userName} has ${user.level} Levels and ${user.xp} messages in ${user.serverName}`).join('\n');

		const exampleEmbed = new EmbedBuilder()
	//	.setURL(`[ ${message.guild.name}](https://discord.gg/C8yKeff7YH)`)
		.setTitle('<:D_Cafe_diamond_blue:854060833960099881>Server XP LeaderBoard<:D_Cafe_diamond_blue:854060833960099881>')
		.setThumbnail('https://cdn.discordapp.com/attachments/734438955822350346/1149936827155873932/Cafe.gif')
		.setDescription(`Leaderboard:\n${leaderboard}`, { code: true })
		.setColor('#ffff55')
		.setImage()
		.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})

			message.channel.send({ embeds: [exampleEmbed]})
  			} catch (error) {
    			console.error('Error fetching leaderboard:', error);
    			message.channel.send('An error occurred while fetching the leaderboard.');
  			}
		}

//code for good embeds or codeblocks

}
);

client.login(token.Token);

// ██████████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████



























