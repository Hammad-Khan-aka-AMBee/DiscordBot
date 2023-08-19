//const { get } = require('node-superfetch');
const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');
let color = require('../../resources/Assets/colors.json');

//exports.run = async (client, message, args, color, prefix) => {
  module.exports= {
    name: 'mimi',
    description : 'mimi image ',
    execute(message, args) {
      async function Display()  {
    if (message.content.startsWith('!mimi')){  
      try {
      const  body  = await fetch('https://nekobot.xyz/api/image?type=kemonomimi').then(response => response.json()) 
      
      let embed = new MessageEmbed() 
      .setColor('#99ff99')
      .setDescription(`**[Click here if image failed to load](${body.message})**`) 
      .setImage(body.message)
      .setFooter(`Request by: ${message.author.tag}`)// | ${client.user.username} v${client.version}`) 
      message.channel.send(embed);
      } catch (e) {
        message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
      } 

    }
  }Display()
  }
}
/*
exports.conf = {
    aliases: ['knmm'],
    cooldown: "3"
}

exports.help = {
    name: "kemonomimi",
    description: "Search for kemonomimi image",
    usage: "kemonomimi"
}
*/