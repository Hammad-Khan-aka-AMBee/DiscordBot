module.exports={
    name: 'Mute',
    description : 'Mute Cmd',
    execute(message, args){}}
  /*module.exports = {
        config: {
            name: 'lock',
            aliases: ['lk'], 
            description: "",
            category: "Admin"
        },
        run: async (client, message, args) => {
        const Discord = require('discord.js')
    
        if(!message.member.hasPermission("MANAGE_MESSAGES", "MANAGE_CHANNELS")) {
        return message.reply(`<@${message.author.id}>, You do not have the permissions`);
        } else if(!message.guild.me.permissions.has("MANAGE_MESSAGES", "MANAGE_CHANNELS")) {
          return message.reply("I don't have Permissions")
        } else {
        
        message.channel.overwritePermissions(message.guild.everyone, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
        });
    
         const embedLock = new Discord.MessageEmbed()
         .setTitle(`Channel successfully blocked! Use !ynlock to Unlock the channel`)
         .setColor("RED")
         const msg = await message.channel.send(embedLock)
        }
        }
    } */