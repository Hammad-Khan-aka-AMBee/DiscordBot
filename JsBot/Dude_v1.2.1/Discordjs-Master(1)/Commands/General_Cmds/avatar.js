/*const fetch = require("node-fetch");
const Discord = require('discord.js')
const  Guild = require('discord.js')
const config = require('../../config.json')
module.exports= {
    name: 'avatar',
    description : ' avatar',
    execute(message, args) {
//async function Display()  {
//if (message.content === '!avatar') {
if (message.content.startsWith(config.prefix + 'avatar')) {
    const user = message.mentions.members.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
        .setColor('0x333333')
        .setAuthor(Guild.User.username)
        //.setImage(members.avatarURL({ format: "png", dynamic: true }));
        .setImage(Guild.User.avatarURL())
        //.setImage(message.author.avatarURL("mask-1l8v16 svg-2V3M55", "/assets/dd4dbc0016779df1378e7812eabaa04d.png"))
    message.channel.send(avatarEmbed);
}
}
}
    
*/