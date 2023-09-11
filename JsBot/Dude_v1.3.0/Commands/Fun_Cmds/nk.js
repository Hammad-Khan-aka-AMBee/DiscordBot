//const  fetch  = require('node-superfetch');
const fetch = require("node-fetch");
const { MessageEmbed } = require('discord.js');
let color = require('../../resources/Assets/colors.json')

module.exports= {
    name: 'nk',
    description : ' fun command of nekocat ',
    execute(message, args) {
        async function Display()  {
            if (message.content === '!nk'){ 
                const  body  = await fetch('https://nekobot.xyz/api/image?type=neko').then(response => response.json());
                console.log(body.message);
                message.channel.send(body.message)
                
                /*try {
                    //const body = require('./neko.json')
                    //const body = "https://nekobot.xyz/api/image?type=neko";
                    const { body } = await fetch('https://nekobot.xyz/api/image?type=neko').then(response => response.json());
                    console.log({body});
                                let embed = new MessageEmbed()
                                .setImage(body)
                                .setColor('#ff6767')
                                .setDescription('\n')
                                
                                return message.channel.send(embed);
                                
                            }
                            
                                catch (e) {
                                message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
                                } 
                                //console.log(body.image.pic2.message);
                                //console.log(embed)*/

                            }
            
            }Display();
        }
}