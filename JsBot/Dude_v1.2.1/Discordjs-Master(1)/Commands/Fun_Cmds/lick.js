const { MessageEmbed } = require('discord.js'); //let color = require('../../resources/Assets/colors.json')
const fetch = require("node-fetch");

module.exports= {
	name: 'lic',
	description : ' fun command of licking ',
	execute(message, args) {
		async function Display()  {
	if (message.content.startsWith('!lic')){	
		var user = message.mentions.users.first()// || client.users.get(args[0]);
			if (!user) return message.channel.send( 'You need to mention user you want to Lick')//, client.commands.get('hug').help);
			
			const  body  = await fetch('http://api.nekos.fun:8080/api/lick').then(response => response.json());
			//console.log(body, {body})
			
			var embed = new MessageEmbed()
			if(user.id === message.author.id) {
				embed.setDescription(`**${message.author.username}**, Are you alone? Okay here some licks for you.`)
				embed.setImage(body.image.setColor('#99ffff'))
				embed.setFooter(`Request by: ${message.author.tag}`)// | ${client.user.username} v${client.version}`) 
			} else if(user.id === client.user) {
			embed.setDescription(`Oh thanks **${message.author.username}** So cute.`)
			embed.setImage(body.image).setColor('#ff99ff') 
			embed.setFooter(`Request by: ${message.author.tag} `)//| ${client.user.username} v${client.version}`) 
			} else {
			embed.setDescription(`**${message.author.username}** Licked **${user.username}**`)
			embed.setImage(body.image)
			embed.setFooter(`Request by: ${message.author.tag}`)// | ${client.user.username} v${client.version}`) 
			} 
			embed.setColor('yellow')
			return message.channel.send(embed);
			
			} 
		}Display()
	}
	}