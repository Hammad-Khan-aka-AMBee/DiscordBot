//const { Guild} = require("discord.js");
//const user = <client>.users.cache.get('<id>');
//<client>.user.setAvatar('<url or path>');

const Discord  = require("discord.js");
const {client, bot,guild}  = require("discord.js");
module.exports={
    name: 'bant',
    description : 'bant user cmd',
    execute(message, args){
        const avatarList = message.mentions.users.map(user => {
        return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`});

        
        //.setFooter('Time Unbanned', client.user.setAvatarURL({ format: "png", dynamic: true }))


        if  (message.content.startsWith('!bant')) {
            //reason
            //let bannedMember =  parseInt(args[0]);
            //const bannedMember = message.guild.members.cache.get(args[0]);
            let bannedMember = args[0];
            //if (!message.guild.members.cache.has(bannedMember)) 
            if (!bannedMember)
                return message.reply("This user is not banned!");
            //const id = 
            //let bannedMember = args[0];
            
            //let bm = guild.users.cache.get(id)
            console.log(bannedMember);

            let reason = args.slice(1).join(' ');
            if(!reason) return reason = "No reason given.";

            //console.log(guild, guild.members, guild.users);
            //let user = fetch(guild.user.id)

            //let user = bot.fetchUser.id//(args[0])
            //guild.fetch(id).unban(user).then((user) => {
            //message.guild.unban(bannedMember).then((bannedMember)=>{//, {reson : reason})  
            
            const bant_embed = new Discord.MessageEmbed()
                .setTitle('Member unbanned', `${bannedMember}`)
                .addField('unbanned by', message.author)
                .addField('Reason', reason)//, reason)


            try{
            if (bannedMember) {
                console.log('True', `${bannedMember}`)
                //bannedMember
                  message.guild.members.unban(`${bannedMember}`, reason)
                  .then(() => {
                    //embed.setDescription(`Successfully unbanned **${bannedMember.user.tag}**`); // `user` is undefined.
                    //message.channel.send(bant_embed);
                    console.log('member unbanned')
                  })
                }
            /*{message.guild.members.unban(bannedMember, reason).then((bannedMember) =>{
                message.channel.send( Uban_embed);
            }).catch((e) => {
                if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) {
                    message.reply("You cannot unban members");
                } else if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR'])) {
                    message.reply("You cannont unban this member");
                }
                console.log(e.message)
            })
        }*/}
            finally {message.channel.send(bant_embed)}
        //}
    }

    }
}