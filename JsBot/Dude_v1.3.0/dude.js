// ██████████████████████████████ Initialization and imports █████████████████████████████████████████████████████████
const fs = require('fs');
const { prefix, Token } = require('../config.json');
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Discord, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [//GatewayIntentBits.AllIntents
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildBans,
    ]
})

// █████████████████████████████████████  Command Loading  █████████████████████████████████████████████████████████

client.commands = new Collection();

const commandFiles0 = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
const commandFiles1 = fs.readdirSync('./Commands/Utilities_Cmds').filter(file => file.endsWith('.js'));
const commandFiles2 = fs.readdirSync('./Commands/General_Cmds').filter(file => file.endsWith('.js'));
const commandFiles3 = fs.readdirSync('./Commands/Moderation_Cmds').filter(file => file.endsWith('.js'));
const commandFiles4 = fs.readdirSync('./Commands/Currency_Cmds').filter(file => file.endsWith('.js'));
const commandFiles5 = fs.readdirSync('./Commands/Fun_Cmds').filter(file => file.endsWith('.js'));
const commandFiles6 = fs.readdirSync('./Commands/Admin_Cmds').filter(file => file.endsWith('.js'));
const commandFiles7 = fs.readdirSync('./nsfw').filter(file => file.endsWith('.js'));

// █████████████████████████████████████  Console Display  █████████████████████████████████████████████████████████

for (const file of commandFiles0) {
    const command0 = require(`../Commands/${file}`);
    client.commands.set(command0.name, command0);
    console.log(command0, command0.name);
}

for (const file of commandFiles1) {
    const command1 = require(`./Commands/Utilities_Cmds/${file}`);
    client.commands.set(command1.name, command1);
    console.log(command1, command1.name);
    let cmd1 = command1.name;
}

for (const file of commandFiles2) {
    const command2 = require(`./Commands/General_Cmds/${file}`);
    client.commands.set(command2.name, command2);
    console.log(command2, command2.name);
}

for (const file of commandFiles3) {
    const command3 = require(`./Commands/Moderation_Cmds/${file}`);
    client.commands.set(command3.name, command3);
    console.log(command3, command3.name);
}

for (const file of commandFiles5) {
    const command5 = require(`./Commands/Fun_Cmds/${file}`);
    client.commands.set(command5.name, command5);
    console.log(command5, command5.name);
}

for (const file of commandFiles6) {
    const command6 = require(`./Commands/Admin_Cmds/${file}`);
    client.commands.set(command6.name, command6);
    console.log(command6, command6.name);
}
/*
for (const file of commandFiles4) {
    const command4 = require(`../Commands/Currency_Cmds/${file}`);
    client.commands.set(command4.name, command4);
    console.log(command4, command4.name);
}
for (const file of commandFiles7) {
    const command6 = require(`./nsfw/${file}`);
    client.commands.set(command7.name, command6);
    console.log(command7, command7.name);
}
*/


//const Tags = require('../resources/DudeTag');
//const xpdb = require('../Database/newDb.js');

// ██████████████████████████████   Discord Events Initialize  █████████████████████████████████████████████████████████

const welcome = require('./Commands/Moderation_Cmds/guildMemberAdd.js');

// Register the event listener for new members
client.on('guildMemberAdd', (member) => {
  // Execute the welcome module when a new member joins
  welcome.execute(member);
});


client.once('ready', () => {
    console.log('ready');
});

// ██████████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (message.content === '!ping') {
        message.channel.send('pong');
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

client.login(Token);

// ██████████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████

