//const { get } = require('node-superfetch');
const fetch = require("node-fetch");
let color = require('../../resources/Assets/colors.json');
const fs = require('fs');
//const rfile = fs.readdirSync('./roasts').filter(file => file.endsWith('.txt'));
const rfile = require('../../resources/Assets/roast.json')

//exports.run = async (client, message, args, color) => {
module.exports= {
    name: 'roast',
    description : ' fun command of roast',
    execute(message, args) {
    if (message.content.startsWith('!roast')){   
      async function Display()  {
      let user = message.mentions.users.first() //|| client.users.get(args[0]);
      
      if(!user) user = message.author;
      let body = rfile
      
      try {
        //let  body  = await fetch('https://sharif-api-js.glitch.me/api/roast')
        //console.log({body}, body, body.response)
        const score = await Math.floor( Math.random() * (1, 80)) ;
        //score.floor();
        
        let r = body[score]
        
        message.channel.send(`**${user.username}**, ${r}`)
      } catch (e) {
        message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
      } 
        

    }Display()
  }
}
}
/*
exports.conf = {
    aliases: ['insult'],
    cooldown: ""
}

exports.help = {
    name: "roast",
    description: "Roasts a user.",
    usage: "roast [@user]"
}
*/