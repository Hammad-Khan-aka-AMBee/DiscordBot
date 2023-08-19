const { get } = require('node-superfetch');
/*const { MessageEmbed } = require('discord.js');
let color = require('../../resources/Assets/colors.json')
/*function showNeko (client, msg, args){
	try{
		return exports.getNeko(msg.channel);
	} catch (err) {
		return msg.channel.send(err.stack, { code: 'ini' });
	}
}*/

//exports.getNeko = async (channel, extend = '') => {

/*
  module.exports= {
    name: 'neko',
    description : ' fun command of neko ',
    execute(message, args) {
    if (message.content.startsWith('!neko')){  
        try {
        //const { body } =  get('https://nekobot.xyz/api/image?type=neko') 
        //const {body} = get('https://cdn.nekobot.xyz/0/e/0/c64364627a4a8611a09c45ec34267.png')
        //const {body} = 'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg'

       /*let ctx = new MessageEmbed()
        ctx.setColor('RANDOM')
        ctx.setDescription(`**[Click here if image failed to load](${body.message})**`) 
        ctx.setImage(body)//.message) 
        return message.channel.send(extend, {embed: ctx});
        }
        var outside
        var pic = get("https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg")

          //fetch(fetchURL + image)
          //var fetchURL='https://nekobot.xyz/api/image?type=neko';
          //var image = fetchURL.message;
          var fetchURL = "https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg"
          //var image = pic
          //fetch( fetchURL+ image )
          //get(fetchURL)//+ image)
            //                         vvvv
            .then(response => response.get(fetchURL))//response.blob())
            .then(images => {
                // Then create a local URL for that image and print it 
                outside = URL.createObjectURL(images)
                console.log(outside)
            })

        const {body} = require('./neko.json')
        let embed = new MessageEmbed()
        .setImage(body)//.image)//get('https://nekobot.xyz/api/image?type=neko').message)
        .setColor('#ff6767')
        .setDescription('\n')
        return message.channel.send(embed);
      }
        catch (e) {
        message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
        } 

      }
    }
  }

//this.run = showNeko
/*
exports.conf = {
    aliases: ['nya'],
    cooldown: "3"
}

exports.help = {
    name: "neko",
    description: "Search for neko image, if you want the bot send a neko every one hours please make a channel named `neko-present` or `bot-spam`.",
    usage: "neko"
}

;
*/