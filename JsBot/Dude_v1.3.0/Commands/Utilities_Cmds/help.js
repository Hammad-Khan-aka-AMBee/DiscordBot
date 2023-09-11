const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers
        // ...
    ]
})
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
module.exports= {
  name: 'help',
  description : 'help command of the bot and its usage',
  execute(message, args) {
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle(`${message.guild.name}'s HELP COMMAND`)//, iconURL: `${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`})
	//.setURL('https://cdn.discordapp.com/attachments/855790392742248458/1149762895224242267/HELP.gif')
	.setImage('https://cdn.discordapp.com/attachments/855790392742248458/1149762895224242267/HELP.gif')
	.setAuthor({ name: ` ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`})//, url: 'https://discord.js.org' })
	.setDescription('Here you will find all the HELP Commands of this bot')
	.setThumbnail('https://cdn.discordapp.com/attachments/734438955822350346/1149936827155873932/Cafe.gif')//`${message.guild.iconURL({ dynamic: true, size: 256 })}`) 
	.addFields(
		{ name: 'General Utilities', value: 
'<:D_Cafe_forward_green:854061875066961960> beep\n<:D_Cafe_forward_green:854061875066961960> help\n<:D_Cafe_forward_green:854061875066961960> server\n<:D_Cafe_forward_green:854061875066961960> stats\n ',inline : true },
		//{ name: '\u200B', value: '\u200B' },
		{ name: 'Fun', value: 
'<:D_Cafe_forward_red:854061680366583808> avatar\n<:D_Cafe_forward_red:854061680366583808> invite\n<:D_Cafe_forward_red:854061680366583808> report\n  ', inline: true},
		{ name: 'Special', value: '<:D_Cafe_forward_pink:854062782101585981> xp <:D_Cafe_forward_pink:854062782101585981>\n<:D_Cafe_forward_pink:854062782101585981> tag <:D_Cafe_forward_pink:854062782101585981>\n<:D_Cafe_forward_pink:854062782101585981> rank <:D_Cafe_forward_pink:854062782101585981>\n', inline: true},
		{ name: 'Currency', value: 
'<:D_Cafe_forward_yellow:854062707505102918> money\n<:D_Cafe_forward_yellow:854062707505102918> leaderboard\n<:D_Cafe_forward_yellow:854062707505102918> daily\n<:D_Cafe_forward_yellow:854062707505102918> shop\n<:D_Cafe_forward_yellow:854062707505102918> buy\n<:D_Cafe_forward_yellow:854062707505102918> transfer\n<:D_Cafe_forward_yellow:854062707505102918> inventory\n ', inline : true},
		{ name: 'Moderation', value: 
'<:D_Cafe_forward_blue:854062607715401749> addrole\n<:D_Cafe_forward_blue:854062607715401749> remrole\n<:D_Cafe_forward_blue:854062607715401749> ban\n<:D_Cafe_forward_blue:854062607715401749> bant\n<:D_Cafe_forward_blue:854062607715401749> kick\n<:D_Cafe_forward_blue:854062607715401749> mute\n<:D_Cafe_forward_blue:854062607715401749> softmute\n<:D_Cafe_forward_blue:854062607715401749> mutent\n<:D_Cafe_forward_blue:854062607715401749> shamebox\n<:D_Cafe_forward_blue:854062607715401749> softban\n<:D_Cafe_forward_blue:854062607715401749> warn\n ', inline: true },
	)
	.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
message.channel.send({ embeds: [exampleEmbed] });

}}