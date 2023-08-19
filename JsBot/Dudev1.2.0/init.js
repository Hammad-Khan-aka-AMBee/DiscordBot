const fs = require('fs');
const Discord = require('discord.js')
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix, Token } = require('../config.json');
const prefix = '!'
//const passcode = require('./pass.json')
//console.log(passcode)

//const Tags = require('/resources/DudeTag');
//const Currency = require('/resources/Currency')
//const Xp = require('/resources/Xp')
    

const commandFiles0 = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

const commandFiles1 = fs.readdirSync('./Commands/Utilities_Cmds').filter(file => file.endsWith('.js'));

const commandFiles2 = fs.readdirSync('./Commands/General_Cmds').filter(file => file.endsWith('.js'));

const commandFiles3 = fs.readdirSync('./Commands/Moderation_Cmds').filter(file => file.endsWith('.js'));

//const commandFiles5 = fs.readdirSync('./Commands/Fun_Cmds').filter(file => file.endsWith('.js'));


for (const file of  commandFiles0) {
        const command0 = require(`./Commands/${file}`);
        client.commands.set(command0.name, command0);

}

    for (const file of  commandFiles1) {
        const command1 = require(`./Commands/Utilities_Cmds/${file}`);
        client.commands.set(command1.name, command1);
        console.log(command1, command1.name);	 // let cmd1 = command1.name;
    }
    for (const file of  commandFiles2) {
        const command2 = require(`./Commands/General_Cmds/${file}`);
        client.commands.set(command2.name, command2);
        console.log(command2, command2.name);
    }
    for (const file of  commandFiles3) {
        const command3 = require(`./Commands/Moderation_Cmds/${file}`);
        client.commands.set(command3.name, command3);
       console.log(command3, command3.name);
    }/*
    for (const file of  commandFiles4) {
        const command4 = require(`../Commands/Currency_Cmds/${file}`);
        client.commands.set(command4.name, command4);
       // console.log(command4, command4.name);
    }
    for (const file of  commandFiles5) {
        const command5 = require(`./Commands/Fun_Cmds/${file}`);
        client.commands.set(command5.name, command5);
        //console.log(command5, command5.name);
    }
*/


client.once('ready',() => {console.log('ready');})
    
    
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
    
    if (message.content === '!ping') {
		message.channel.send('pong')
    }
    
    if (!client.commands.has(commandName)) return;
    
const command = client.commands.get(commandName);
try {
    command.execute(message, args);
} catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
}

});


client.on('messageDelete', message => {
    if (message.author.bot) return;
    let editEmbed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag} | Deleted message`, message.author.displayAvatarURL())
    .setDescription(`
**Message sent by ${message.author} deleted in ${message.channel.toString()}**
**Message Content:**\n\n${message.content}`)
    .setFooter(`ID: ${message.id}`) 
    .setColor('#ff00ff').setTimestamp()
    
    
    if(message.guild.id === '732650949050630156'){
    const bchannel = message.guild.channels.cache.find(channel => channel.name === 'bot-logs') 
    bchannel.send(editEmbed)
    };
});
client.on('messageUpdate' ,(oldMessage, newMessage)  =>{
    if (oldMessage.author.bot) return;
    let editEmbed = new Discord.MessageEmbed()
    .setAuthor(`${newMessage.author.tag} | Edited message`, newMessage.author.displayAvatarURL())
    .setDescription(`**Message sent by ${newMessage.author} edited in ${oldMessage.channel.toString()}**`) 
    .addField("Before Edited:", `${oldMessage.content}` || "No content")
    .addField("Edited To:", `${newMessage.content}` || "No content")
    .addField("Link to message:", newMessage.url || newMessage.link || 'No URL') 
    .setFooter(`ID: ${newMessage.id}`) 
    .setColor('#ff6699')
    .setTimestamp()

if(oldMessage.guild.id === '732650949050630156'){
    const bchannel = oldMessage.guild.channels.cache.find(channel => channel.name === 'bot-logs') 
    bchannel.send(editEmbed)
    };
    


});
  

client.login(Token);
