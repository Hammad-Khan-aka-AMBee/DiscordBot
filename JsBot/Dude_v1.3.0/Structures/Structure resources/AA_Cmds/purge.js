/*const Discord  = require("discord.js");
const {client, bot,guild}  = require("discord.js");

//exports.run = async (client, message, args, color) => {
module.exports = {  
  name: 'delete/purge ',
    description : ' delete or purge user cmd',
    execute(message, args){
      if(message.content.startsWith(['!del', '!delete', '!purge', '!rem'] )){
        const amount = parseInt(args[0]);
        console.log(amount);
        /*if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}, Sorry but you need \`MANAGE_MESSAGES\` Permission to use this command.**`).then(m => m.delete(7000));
          
          if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**${message.author.username}, Uh i want do this but i need following permission to \`purge\` to work: \`MANAGE_MESSAGES\`**`).then(x => x.delete(7000));
          
            if (isNaN(args[0])) return message.channel.send(`**${message.author.username}, Please supply a valid amount of messages to purge**!`);
          
            else if (amount < 2 || amount > 100) return message.channel.send(`**${message.author.username}, Please supply a number less than 100**!`).then(u => u.delete(7000));
          */
        /*message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
          });}
        }
      /*
      if(message.content.startsWith('!del')){
        const amount = parseInt(args[0]);
        console.log(amount)
          /*if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}, Sorry but you need \`MANAGE_MESSAGES\` Permission to use this command.**`).then(m => m.delete(7000));
          
          if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**${message.author.username}, Uh i want do this but i need following permission to \`purge\` to work: \`MANAGE_MESSAGES\`**`).then(x => x.delete(7000));
          
          if (isNaN(args[0])) return message.channel.send(`**${message.author.username}, Please supply a valid amount of messages to purge**!`);
          
          else if (amount < 2 || amount > 100) return message.channel.send(`**${message.author.username}, Please supply a number less than 100**!`).then(u => u.delete(7000));
          *//*
          message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
          });
              /*.then(messages => message.channel.send(`**Successfully deleted \`${messages.size}/${amount}\` messages.**`).then(msg => msg.delete({
                timeout: 5000
  //            */ // }//))
              
//}
//}//}


/*
exports.conf = {
    aliases: ['prune', 'clear'],
    cooldown: "5"
}

exports.help = {
    name: "purge",
    description: "Removes last of messages from the channel (up to 99)",
    usage: "purge <number>"
}
*/