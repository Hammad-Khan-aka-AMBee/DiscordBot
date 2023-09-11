const { EmbedBuilder } = require('discord.js');
const { Client, GatewayIntentBits,Permissions  } = require('discord.js');
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


module.exports = {
  name: 'addrole',
  description: 'Add a role to a user (admins and mods only)',
  execute(client, message, args) {
    // Check if the command was used in a guild (server)
 //   if (!message.guild) {
  //    return message.channel.send('This command can only be used in a server.');
   // }

    // Check if the user running the command has permission (admin/moderator)
  
//  if (
//      !message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR) &&
//      !message.member.roles.cache.some((role) => role.name === 'Moderator')
//    ) {
//      return message.channel.send('You do not have permission to use this command.');
//    }

    // Get the mentioned user or user by ID
    const target =
      message.mentions.members.first() //|| message.guild.members.id;

    // Check if a valid target user was provided
    if (!target) {
      return message.channel.send(
        'Please mention a user or provide their ID to add a role to.'
      );
    }

    // Remove the target user from the args
    args.shift();

    // Join the remaining arguments to get the role name
    const roleName = args.join(' ');

    // Check if the role exists
    const role = message.guild.roles.cache.find((r) => r.name === roleName);

    // Check if the target user already has the role
    if (target.roles.cache.has(role.id)) {
      return message.channel.send('The user already has this role.');
    }

    // Add the role to the target user
    try {
      target.roles.add(role);
      const successEmbed = new EmbedBuilder()
        .setColor('GREEN')
        .setTitle('Role Added')
	.setAuthor({ name: ` ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`})
        .setDescription(`Added role ${roleName} to ${target.user.tag}`)
        .setTimestamp();
      message.channel.send({ embeds: [successEmbed] });
    } catch (error) {
      console.error(error);
      return message.channel.send('Failed to add the role.');
    }
  },
};


/*

module.exports={
    name: 'addrole',
    description : 'Add a role Cmd',
    execute(message, args){
            if (message.content.startsWith('!addrole')){
               try{ //if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, you need \`MUTE_MEMBERS\` Permission to use this commands**!`).then(msg=>msg.delete(7000));
                //if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, I need the following permission to \`mute\` command to work: \`MANAGE_ROLES\`**`).then(msg=>msg.delete(7000));
                let id = args[0];

                let member = message.mentions.members.first()// || message.guild.members.id;
                if (!member) return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`);
                
                let addedrole = message.guild.roles.cache.find(x => x.name === id);
                if (!addedrole) 
                return message.channel.send(" Master the role you mentioned does not exist or I am unable to find it")
                
            }   catch(e) {
                    console.log(e.message);
        }
    };

    if (member.roles.cache.has(addedrole.id)) return message.channel.send(`**${member.user.username}** has the role already`)
    //(member.addRole(muterole.id));
    member.add(addedrole)
        message.channel.send(`**${member.user.username}, Has been given the role and its permissions and accessibilities**.`);
}
    }

*/
	.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})