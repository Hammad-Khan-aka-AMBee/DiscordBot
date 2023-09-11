//require('dotenv').config(); //initialize dotenv

//const { Client, Intents } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { prefix, Token } = require('../config.json');


//const client = new Client({ intents: [GatewayIntentBits.Guilds,Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers
        // ...
    ]
})



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




client.on('messageCreate', message => {
//if (message.content === 'embed') {
   
// inside a command, event listener, etc.
})
    






client.on('messageCreate', msg => {
// You can view the msg object here with console.log(msg)
 if (msg.content === 'Hello') {
   msg.reply(`Hello ${msg.author.username}`);
 }
});


client.login(Token);