//const fetch = require("node-fetch");
//const { Client, MessageEmbed } = require('discord.js');
const querystring = require('querystring');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const fetch = require("node-fetch");
module.exports= {
    name: 'urban',
    description : ' fun command of urban dictionay',
    execute(message, args) {
async function Urban()  {
if (message.content.startsWith('!urban')) {

    if (!args.length) {
        return message.channel.send('You need to supply a search term!');
    }

    const query = querystring.stringify({ term: args.join(' ') });
    //(async)=>{  

    const list = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
    console.log({ list });


    if (!list.length) {
        return message.channel.send(`No results found for **${args.join(' ')}**.`);
    }


                const [answer] = list;
                console.log([answer], [answer].word)

                const embed = new Discord.MessageEmbed()
                    .setColor('#EFFF00')
                    .setTitle(answer.word)
                    .setURL(answer.permalink)
                    .addFields(
                        { name: 'Definition', value: trim(answer.definition, 1024) },
                        { name: 'Example', value: trim(answer.example, 1024) },
                        { name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
                    );
                message.channel.send(embed);
    }
//Urban();

          /* async function myfunction() {
                console.log('Inside of myfunction');
                message.channel.send(embed);
              }
              function start() {
               
                  
                return myfunction( if (!args.length) {
                    return message.channel.send('You need to supply a search term!');
                }
    
                const query = querystring.stringify({ term: args.join(' ') });
    
                const list = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
                console.log({ list });
    
    
                if (!list.length) {
                    return message.channel.send(`No results found for **${args.join(' ')}**.`);
               
            });
              }
              
              // Call start
              (async() => {
                console.log('before start');
              
                await start();
                
                console.log('after start');
              })();*/
              
    }
}

}
