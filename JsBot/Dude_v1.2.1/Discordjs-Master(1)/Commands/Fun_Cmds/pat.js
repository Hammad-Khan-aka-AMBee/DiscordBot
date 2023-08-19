const { MessageEmbed } = require('discord.js'); //let color = require('../../resources/Assets/colors.json')
const fetch = require("node-fetch");

module.exports= {
	name: 'patt',
	description : ' fun command of patrick/patting ',
	execute(message, args) {
		async function Display()  {
	if (message.content.startsWith('!pat')){	
		var user = message.mentions.users.first()// || client.users.get(args[0]);
			if (!user) return message.channel.send( 'You need to mention user you want to pat')//, client.commands.get('hug').help);
			
			const  body  = await fetch('http://api.nekos.fun:8080/api/pat').then(response => response.json());
			//console.log(body, {body})
			
			var embed = new MessageEmbed()
			//if(user.id === message.author.id) 
			{
            embed.setDescription(`**${message.author.username}** patted **${user.username}**`)
			embed.setImage(body.image)
			embed.setFooter(`Request by: ${message.author.tag}`)// | ${client.user.username} v${client.version}`) 
			} 
			embed.setColor('yellow')
			return message.channel.send(embed);
			
			} 
		}Display()
	}
	}