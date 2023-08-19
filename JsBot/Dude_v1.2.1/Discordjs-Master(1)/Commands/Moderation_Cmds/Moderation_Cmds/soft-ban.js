const Discord = require('discord.js')

module.exports={
    name: 'sban',
    description : 'soft ban user cmd',
    execute(message, args){
      let member = message.mentions.members.first();
      //const id = `${member}`;
        
        let reason = args.slice(1).join(" ");
        if(!reason) 
        reason = "No Reason Provided"

        const ban_embed = new Discord.MessageEmbed()
        .setTitle('Member banned')
        //.addField('User banned', member)
        .addField('banned by', message.author)
        .addField('Reason', reason)
        .setFooter('Time banned')//, client.user.displayAvatarURL())
        //.setTimestamp()

        if  (message.content.startsWith('!sban')) {
            console.log(`${member.id}`)

            
            //member.send(`hello, you have been temp ban from ${message.guild.name} for: ${reason}`).then(()=>{
                //console.log('Welcome to My Console,');
           
            //
            
            //setTimeout(unban, 3000)
            //member.ban().then((member) => {
            //    message.channel.send( ban_embed);
            //})
            member.ban(member, {days: 1, reason : reason}).then(() =>{
                setTimeout(function unban(){ 
                    message.guild.members.unban(`${member.id}`).
                    then(message.channel.send(`${member.id} has been auto-unbanned by Me`));      }, 300000)})
            .catch((e) => {
                if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
                    message.reply("You cannot ban members");
                } else if (member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
                    message.reply("You cannont ban this member");
                }
                console.log(e.message);
            })//)
        //}
        //);
            message.channel.send(`${member.name} has been (s/h)banned from ${message.guild.name}`);
            message.channel.send(ban_embed);

    
}
}
}

/**
 * a softban which bans user only for a certain timeperiod and bans them through their id rather ip
 */

/*console.log('Welcome to My Console,');
                setTimeout(function() {
                    console.log('Blah blah blah blah extra-blah');
                }, 3000); 
                
                */