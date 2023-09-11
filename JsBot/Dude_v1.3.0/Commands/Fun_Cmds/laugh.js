const { MessageEmbed } = require('discord.js'); //let color = require('../../resources/Assets/colors.json')
const fetch = require("node-fetch");

module.exports= {
	name: 'lauf',
	description : ' fun command of laufing ',
	execute(message, args) {
		async function Display()  {
	if (message.content.startsWith('!lauf')){	
		//var user = message.mentions.users.first()// || client.users.get(args[0]);
			//if (!user) return message.channel.send( 'You need to mention user who is crying')//, client.commands.get('hug').help);
			
			const  body  = await fetch('http://api.nekos.fun:8080/api/laugh').then(response => response.json());
			//console.log(body, {body})
			
			var embed = new MessageEmbed()
            embed.setImage(body.image)
			embed.setColor('yellow')
			return message.channel.send(embed);
			
			} 
		}Display()
	}
	}