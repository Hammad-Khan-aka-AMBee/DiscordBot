//const fetch = require("node-superfetch");
/*const fetch = require("node-fetch");

let color = require('../../resources/Assets/colors.json');

//exports.run = async (client, message, args, color) => {
module.exports= {
    name: 'ship',
    description : ' fun command of ship 1 to another',
    execute(message, args) {
      async function Display()  {
    if (message.content.startsWith('!ship')){
      //const user = message.mentions.users.first() || message.author;   
  
        const shipped = message.mentions.members.size === 2 ? message.mentions.members.array()[1] : message.member;
        const shipper = message.mentions.members.size === 1 || message.mentions.members.size === 2 ? message.mentions.members.array()[0] : message.member;
        const first_length = Math.round(shipper.displayName.length / 2);
        const first_half = shipper.displayName.slice(0, first_length);
        const second_length = Math.round(shipped.displayName.length / 2);
        const second_half = shipped.displayName.slice(second_length);
        const final_name = first_half + second_half;
        const score = Math.random() * (0, 100);
        const prog_bar = Math.ceil(Math.round(score) / 100 * 10);
        const counter = "▰".repeat(prog_bar) + "▱".repeat(10 - prog_bar);
        const m =  message.channel.send('*Please Wait...*');
      message.channel.startTyping();
      //const new1 = 
        const  body  = await fetch(`https://nekobot.xyz/api/imagegen?type=ship&user1=${shipper.user.AvatarURL}&user2=${shipped.user.AvatarURL}`)
        .then(response => response.json());;
        console.log({body},  body.message)

        return message.channel.send({
          embed: {
            "title": `${shipper.displayName} ❤ ${shipped.displayName}`,
            "description": `**Love %**\n${counter}\n\n${final_name}`,
            "url": body.message,
            "color": 6192321,
            "image": {
              "url": body.message
            },
            "footer": {
              "icon_url": message.author.AvatarURL,
              //"text": `Request by ${message.author.tag} | ${client.user.username} v${client.version}`
            }
          }
        }).then(() => {message.delete(); message.channel.stopTyping();});

    }
  }Display();
}
}
/*
exports.conf = {
    aliases: [],
    cooldown: ""
}

exports.help = {
    name: "ship",
    description: "Ship user1 and user2",
    usage: "ship [@user1] [@user2]"
}
*/