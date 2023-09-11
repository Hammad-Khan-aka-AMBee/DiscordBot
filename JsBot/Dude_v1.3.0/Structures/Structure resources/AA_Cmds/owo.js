/*const { get } = require('node-superfetch');
const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');

let color = require('../../resources/Assets/colors.json');

//exports.run = async (client, message, args, color) => {
module.exports= {
    name: 'uwu',
    description : ' fun command of owo image',
    execute(message, args) {
      async function Display()  {
    if (message.content.startsWith('!uwu')){   
      let i = args[0];

      const  body  = await fetch("https://rra.ram.moe/i/r?type=owo");
      console.log(body)

      let embed = new MessageEmbed() 
      .setColor('blue') 
      //.setDescription(`**[Click here if the image failed to load.](https://cdn.ram.moe/${body.path.replace("/i/", "")})**`) 
      .setImage(`https://cdn.ram.moe/${body.path.replace(i)}`)
      .setFooter(`Request by: ${message.author.tag} | `, message.author.AvatarURL) 
      message.channel.send(embed);
      
    }

  }Display()
}
}
/*
exports.conf = {
    aliases: ['uwu', 'UwU', 'OwO'],
    cooldown: ""
}

exports.help = {
    name: "owo",
    description: "OwO, what's this?",
    usage: "owo"
}
*/