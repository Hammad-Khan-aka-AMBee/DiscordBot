const { MessageEmbed } = require('discord.js'); //let color = require('../../resources/Assets/colors.json')
const fetch = require("node-fetch");

module.exports= {
	name: 'hug2',
	description : ' fun command of hug  ',
	execute(message, args) {
		async function Display()  {
	if (message.content.startsWith('!hug2')){	
		var user = message.mentions.users.first();
        if (!user) return message.channel.send( 'You need to mention user ')//, client.commands.get('hug').help);
			
			const  body  = await fetch('http://api.nekos.fun:8080/api/hug').then(response => response.json());
            console.log(body, {body})
            var embed = new MessageEmbed()
            //embed.setDescription(` **${user.username}** is a baka`)
			embed.setImage(body.image)
			embed.setFooter(`Request by: ${message.author.tag}`)
            embed.setColor('yellow')
			return message.channel.send(embed);

    }
}Display()
    }
}