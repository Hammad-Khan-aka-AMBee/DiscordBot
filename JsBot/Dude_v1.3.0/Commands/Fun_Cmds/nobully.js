const { MessageEmbed } = require('discord.js');
const actions = require('../../resources/assets/NOBULLY.json');
let color = require('../../resources/Assets/colors.json');

//exports.run = async (client, message, args, color) => {
module.exports= {
    name: 'nobully',
    description : ' fun command of no bully',
    execute(message, args) {
    if (message.content.startsWith('!nobully')){   
        if (message.mentions.users.first() === client.user) return message.channel.send(`(✿´ ꒳ \` ) am not bulli!!`);
        const recipient = message.content.split(/\s+/g).slice(1).join(" ");
                if (!recipient) {
                    const embed = new MessageEmbed()
                        .setColor('Blue')
                        .setImage(actions[Math.round(Math.random() * (actions.length - 1))]);
                    return message.channel.send({ embed: embed });
                } else {
                    const embed = new MessageEmbed()
                        .setColor('Pink')
                        .setDescription(`**${recipient}**, pls no bulli!!`) 
                        .setImage(actions[Math.round(Math.random() * (actions.length - 1))]);
                    return message.channel.send({ embed: embed });
                }
        }
    }
}


/*
exports.conf = {
    aliases: ['antibully'],
    cooldown: ""
}

exports.help = {
    name: "nobully",
    description: "Transform Anti bully Akari",
    usage: "nobully [@user]"
}
*/