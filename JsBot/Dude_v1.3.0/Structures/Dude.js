const fs = require('fs');
const Discord = require('discord.js');
const bot = require('discord.js');
const { prefix, Token } = require('../config.json');


const client = new Discord.Client();
client.commands = new Discord.Collection();


const commandFiles0 = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
const commandFiles1 = fs.readdirSync('./Commands/Utilities_Cmds').filter(file => file.endsWith('.js'));
const commandFiles2 = fs.readdirSync('./Commands/General_Cmds').filter(file => file.endsWith('.js'));
const commandFiles3 = fs.readdirSync('./Commands/Moderation_Cmds').filter(file => file.endsWith('.js'));
const commandFiles4 = fs.readdirSync('./Commands/Currency_Cmds').filter(file => file.endsWith('.js'));
const commandFiles5 = fs.readdirSync('./Commands/Fun_Cmds').filter(file => file.endsWith('.js'));
const commandFiles6 = fs.readdirSync('./nsfw').filter(file => file.endsWith('.js'));

    for (const file of  commandFiles0) {
        const command0 = require(`../Commands/${file}`);
        client.commands.set(command0.name, command0);
        console.log(command0, command0.name);
    }
    for (const file of  commandFiles1) {
        const command1 = require(`../Commands/Utilities_Cmds/${file}`);
        client.commands.set(command1.name, command1);
        console.log(command1, command1.name);
        let cmd1 = command1.name;
    }
    for (const file of  commandFiles2) {
        const command2 = require(`../Commands/General_Cmds/${file}`);
        client.commands.set(command2.name, command2);
        console.log(command2, command2.name);
    }
    for (const file of  commandFiles3) {
        const command3 = require(`../Commands/Moderation_Cmds/${file}`);
        client.commands.set(command3.name, command3);
        console.log(command3, command3.name);
    }
    /*for (const file of  commandFiles4) {
        const command4 = require(`../Commands/Currency_Cmds/${file}`);
        client.commands.set(command4.name, command4);
        console.log(command4, command4.name);
    }*/
    for (const file of  commandFiles5) {
        const command5 = require(`../Commands/Fun_Cmds/${file}`);
        client.commands.set(command5.name, command5);
        console.log(command5, command5.name);
    }
    for (const file of  commandFiles6) {
        const command6 = require(`../nsfw/${file}`);
        client.commands.set(command6.name, command6);
        console.log(command6, command6.name);
    }
    
const Tags = require('../resources/DudeTag');
const xpdb = require('../Database/newDb.js')

   // const t = require('../resources/DudeTag');


/*let z = process.openStdin()
z.addListener("data", res => {
    let y = res.toString().trim().split(/ +/g)
    //client.channels.type === "dm";
    //bot.channels.getid("824336731586166785")
    console.log(bot, bot.channel, bot.channels)
    bot.channel.get("824336731586166785")
})
*/
client.once('ready',() => {
    console.log('ready');
    //t(Tags.sync());
    //console.log('Tags Synced');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
    
    if (message.content === '!ping') {
		message.channel.send('pong')
    }
    else if(message.content.startsWith('!del'/*['!del', '!delete', '!purge', '!rem']*/ )){
        const amount = parseInt(args[0]);
        console.log(amount);
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}, Sorry but you need \`MANAGE_MESSAGES\` Permission to use this command.**`).then(m => m.delete(7000));
          
          if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**${message.author.username}, Uh i want do this but i need following permission to \`purge\` to work: \`MANAGE_MESSAGES\`**`).then(x => x.delete(7000));
          
            if (isNaN(args[0])) return message.channel.send(`**${message.author.username}, Please supply a valid amount of messages to purge**!`);
          
            else if (amount < 2 || amount > 100) return message.channel.send(`**${message.author.username}, Please supply a number less than 100**!`).then(u => u.delete(7000));
          
        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
          })
    }
    /*else if (message.content === '!help') {
        //console.log(command1)
        let embed = new Discord.MessageEmbed()
        .addField( `command 1 ${cmd1}`)//`command 1 :${command1.name}` ) 
        .addField(`command 2 : ${command2.name}`)
        .addField(`command 3 : ${command4.name}`)
        .addField(`command 4 :${command5.name}`)
		message.channel.send(embed)
    }*/
    


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



/*
THIS IS NOTE SECTION:
THERE ARE THINGS I AM STILL UNABLE TO DO IT AND THEY RE KNOWN AS SIDE QUESTS, FOR THE NEWBIES, TO COME AND MITIGATE
PURGE COMMAND
BAN AND UNBAN CMD AND HOW TO MANUALLY BAN USING ACCOUNT AND USING IP AND USING BOTH + SOFT BAN AND HARD BAN
EVAL CMD
LOGGING CMD
HELP CMD
MUTE AND UNMUTE CMD
SETTING SOFT-MODLOG CHANNEL AND HARD-LOGGING PLUS (AUDIT-LOGS)AUDIT CHANNEL 
SETTING USER AND MEMBER PERMS
SETTING DMS, SERVER AND WEBSITE VERIFICATION AND INTRODUCTION
CREATING A USER PROFILE AND AUTO ASSIGN ROLES AND TAGS, PLUS AUTO ASSIGN CURRENCY AND BENEFITS
SUGGESTIONS CHANNEL 
auto delete banned user texts


A WAY TO LOG INTO BOT FROM SOME OTHER PLATFORM
A WAY TO RUN MY BOT ON SOME OTHER PCs OR DEVICES
USER COMMANDS, MOD COMMANDS AND ADMIN ONLY COMMANDS


/*const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { prefix, Token } = require('../config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();

const commandFolders = fs.readdirSync('./Commands');
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`../Commands/${folder}/${file}`);
        client.commands.set(command.name, command);
        console.log(command.name);
    }
}

const Tags = require('../resources/DudeTag');
const xpdb = require('../Database/newDb.js');

client.once('ready', () => {
    console.log('Ready');
    // t(Tags.sync());
    // console.log('Tags Synced');
});

client.on('messageCreate', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName === 'ping') {
        message.channel.send('Pong');
    }
    
    // ... (other commands)

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command!');
    }
});

client.login(Token);

*/