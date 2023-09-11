/*module.exports = async(client, member) => {
    const guild = client.guilds.get('492345609928572948');
    guild.channels.get('498353708971720714').setName(`Total Member : ${guild.memberCount}`)
    
  }
  */
const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [   
GatewayIntentBits.Guilds,
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers
  ],
});
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
module.exports = {
  name: 'welcome',
  description: 'Welcome message for new members',
  execute(member) {
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
    // Create a welcome message embed
    const welcomeEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle(`Welcome to ${member.guild.name}!`)
      .setDescription(`We're glad to have you, ${member.user.username}!`)
      .addField('Total Members', member.guild.memberCount, true)
      .setThumbnail(member.user.displayAvatarURL())
      .setFooter('ENJOY YOUR TIME HERE... Brought to you by dragonn' )
      .setTimestamp();

    // Send the welcome message in a designated channel
    const welcomeChannel = member.guild.channels.cache.find(
      (channel) => channel.name === 'welcome'
    );
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
    if (welcomeChannel) {
      welcomeChannel.send({ embeds: [welcomeEmbed] });
    }
  },
};
