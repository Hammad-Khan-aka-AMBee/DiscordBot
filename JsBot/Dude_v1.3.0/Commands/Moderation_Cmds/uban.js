const { EmbedBuilder} = require('discord.js');
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
module.exports = {
  name: 'unban',
  description: 'Unban a user',
  async execute(message, args) {
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	// Check if the user has permissions to unban members
	if (!message.member.permissions.has('BAN_MEMBERS')) {
	return message.reply("You don't have permission to unban members.");
		}

	// Get the user ID to unban
	const userId = args[0];

	if (!userId) {
	return message.reply('Please provide a user ID to unban.');
		}

	// Attempt to unban the user
	try {
	await message.guild.members.unban(userId);

	// Create an embed for the unban confirmation
	const exampleEmbed = new EmbedBuilder()
        .setColor('#00ff00')
        .setTitle('User Unbanned')
        .setDescription(`User with ID ${userId} has been unbanned.`)
        .setTimestamp();
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
      message.channel.send({ embeds: [unbanEmbed] });
	} 
	catch (error) {
      // If there was an error, send an error message
      console.error(error);
      message.reply('An error occurred while trying to unban the user.');
    }
  },
};
