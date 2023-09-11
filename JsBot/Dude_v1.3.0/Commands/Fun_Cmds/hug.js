const { MessageEmbed } = require('discord.js');
const { get } = require('node-superfetch');
let color = require('../../resources/Assets/colors.json')
const fetch = require("node-fetch");

module.exports= {
	name: 'hug',
	description : ' fun command of hug ',
	execute(message, args) {
		async function Display()  {
	if (message.content.startsWith('!hug')){	
		var user = message.mentions.users.first()// || client.users.get(args[0]);
			if (!user) return message.channel.send( 'You need to mention user you want to hug')//, client.commands.get('hug').help);
			
			const  body  = await fetch('https://nekos.life/api/v2/img/hug').then(response => response.json());
			//console.log(body, {body})
			
			var embed = new MessageEmbed()
			if(user.id === message.author.id) {
				embed.setDescription(`**${message.author.username}**, Are you alone? Okay here some hug for you.`)
				embed.setImage(body.url).setColor('#99ffff') 
				embed.setFooter(`Request by: ${message.author.tag}`)// | ${client.user.username} v${client.version}`) 
			} else if(user.id === client.user) {
			embed.setDescription(`Oh thanks **${message.author.username}** for giving me your hugs, So cute.`)
			embed.setImage(body.url).setColor('#ff99ff') 
			embed.setFooter(`Request by: ${message.author.tag} `)//| ${client.user.username} v${client.version}`) 
			} else {
			embed.setDescription(`**${message.author.username}** hugs **${user.username}**`)
			embed.setImage(body.url)
			embed.setFooter(`Request by: ${message.author.tag}`)// | ${client.user.username} v${client.version}`) 
			} 
			embed.setColor('RANDOM')
			return message.channel.send(embed);
			
			} 
		}Display()
	}
	}
	/*
	exports.conf = {
		aliases: [], 
		cooldown: '0'
	}
   exports.help = {
   	name: 'hug', 
       description: 'give someone a cute hug', 
       usage: 'hug <@user | id>' 
   } */