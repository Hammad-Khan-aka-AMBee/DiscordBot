/*const { get } = require('node-superfetch');
const fetch = require("node-fetch");
//exports.run = async (client, message, args, color, prefix) => {
  module.exports= {
    name: 'blb',
    description : 'game of be like bill ',
    execute(message, args) {
      async function Display()  {
    if (message.content.startsWith('!blb')){	  
      let user = message.mentions.users.first()// || client.users.get(args[0]);
      
      if(!user) user = message.author;
      
      try {
        let  body  =  await fetch('https://sharif-api-js.glitch.me/api/belikebill').then(response => response.json())
        const text =  body.response.replace(/{{name}}/gi, user.username)
        message.channel.send(`
    This is ${user.username}.
    ${text}
    ${user.username} is smart.
    Be like ${user.username}.
    `) 
      } catch (e) {
        message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
      } 
        

    }
    }Display()
  }
  }
/*
exports.conf = {
    aliases: ['blbl', 'belike'],
    cooldown: ""
}

exports.help = {
    name: "belikebill",
    description: "Sends a 'Be Like Bill' meme with the name of your choice.",
    usage: "belikebill [@user]"
}
*/