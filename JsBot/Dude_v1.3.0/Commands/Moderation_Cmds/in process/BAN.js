/*
//const user = message.mentions.users.first();
//const msg = message;

if (msg.member.hasPermission("BAN_MEMBERS")) {
    if (message.mentions.users.size != 0){
    if (msg.members.mentions.first()) {
        try {
            Guild.members.ban(user);
            //msg.members.mentions.first().ban(user);
        } catch {
            msg.reply("I do not have permissions to ban" + msg.members.mentions.first());
        }
    } else {
        msg.reply("You do not have permissions to ban" + msg.members.mentions.first());
    }
}

 /*       try {
            
            if (message.member.hasPermission("BAN_MEMBERS")) {
              if (message.mentions.users.size != 0) {
                //if (message.mentions.members.first().banable) {
                if(message.author.id === '637598340154130432'){
                    guild.members.ban(user).then(m => {
                    message.channel.send(`**${m.user.username}** has been banned from **${message.guild.name}**. Bye bye!`);
                  });
                } else {
                  message.channel.send(`**${message.mentions.user.first().username}** is too priveledged for me to ban.`);
                }
              } else {
                message.channel.send('Please tag the user you would like to ban.')
              }
            } else {
              message.channel.send(`**${message.author.username}**, You do not have permission to ban. You must have the \`Ban Members\` permission.`);
            }
          } catch (err) {
            message.channel.send(`Either I am unable to ban **${message.mentions.users.first().username},** or I do not have permission to ban members.`);
          }
        
        }
          }


        }
    }
}
*/