/*module.exports= {
    name: 'report',
    description : 'reports a certain user for their inappropriate actions to the staff team',
    execute(message, args) {
        if (message.content.startsWith("!report")){
            let id =args[0];    
        //args[0]
            let target = message.mentions.members.first()// || `${id}` 
            //`${target.id}`
            if(!target)
            return message.channel.send("Please provide a valid user").then(message.delete(3000))


            let reason = args.slice(1).join(" ")
            if(!reason)
            return message.channel.send(`Please provide a reason for reporting ${target}`)

            let rChannel = message.guild.channels.cache.find(x => x.name === "mod-logs");

            message.channel.send("Your report has been sent to the Staff Team. Thankyou for your cooperation").then(message.delete(3000))
            rChannel.send(`**${message.author.tag}** has reported **${target.user.tag}** for **${reason}**`).then(async msg=>{ 
                await msg.channel.send("reported at ")
                //await msg.react("Y ")
                //await msg.react("N ")
            })
        }
    }
}*/