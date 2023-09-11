const { MessageEmbed } = require('discord.js'), 
      { get } = require('node-superfetch'),
      fetch = require("node-fetch");
      // let done = require('../Utilities_Cmds/src/fetch')
      const redditImageFetcher =require('../Utilities_Cmds/src/fetch') ;

      //let color = require('../../resources/Assets/colors.json')

      module.exports= {
        name: 'meme',
        description : ' fun command meme ',
        execute(message, args) {
          async function Display()  {
        if (message.content.startsWith('!meme')){


         
          //try{
            var meme = await redditImageFetcher.fetch()//.then(response => response.json())//{type: 'meme'})


            //console.log(meme, {meme}, meme[0] )
            //message.channel.send(meme.image)
            //break;
            //setTimeout(() => { message.reply(meme) }, 5000);
            //message.reply(meme);
  
            //let m = message.channel.send(`*Please Wait...*`);
            try {
              //let Embed= new MessageEmbed()
              //return message.channel.send({
              //  embed :meme})
            //const  body  = await fetch('https://api-to.get-a.life/meme')//https://api-to.get-a.life Astral Server
            //console.log(body, body.text, {body}, body.path)

            let memeEmbed = new MessageEmbed() 
            .setColor('#ff9999') 
            .setDescription(meme[0].image)
            //.setTitle(meme.title)
            .setImage(meme[0].image)
            //.setThumbnail(meme[0].thumbnail)
            //.setTimestamp()
            //.setFooter(`Request by: ${message.author.tag}, ${meme.subreddit}`);
            
            message.channel.send(memeEmbed)// => { m.delete();});
             }catch (e) {
              message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`);
            } 
          }
        }Display()
      }
      }
/*
exports.conf = {
    aliases: [],
    cooldown: "5"
}

exports.help = {
    name: "meme",
    description: "Get a random meme",
    usage: "meme"
}*/