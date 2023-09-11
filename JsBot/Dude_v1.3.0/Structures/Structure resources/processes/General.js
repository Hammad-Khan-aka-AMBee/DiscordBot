/* › Commands / avatar.js ——————————————————————————————————————————————————————

   — Returns the profile image of a player, present or not in the guild.
     Targeting by mention, username, or ID                                    */




// —— Create & export a class for the command that extends the base command
/*class Avatar extends Command {

    constructor(client) {
        super(client, {
            name        : "avatar",
            description : "Returns the profile image of a player.\n> Targeting by mention, username, or ID",
            usage       : "avatar {@mention || username || ID}",
            exemple     : ["662331369392832512", "@Luna", "Luna"],
            args        : false,
            category    : "General",
            cooldown    : 1000,
            aliases     : ["pp"],
            permLevel   : 0,
            userPerms   : "SEND_MESSAGES",
            allowDMs    : true,
        });
    }

    async run(message, args) {

        const client = this.client;

        // —— Try to retrieve an ID against a mention, a username or an ID, if nothing is found, use author's ID
        let user = await resolveUser((args[0] || message.author.id), client);

        if (!user)
            return super.respond("No user found");

        user = user instanceof GuildMember ? user.user : user;

        // —— Retrieve the language information for this command
        const lang = client.language.get(message.guild && message.guild.local || "English").avatar(user);

        super.respond({ embed: {
            description: message.author.id === user.id ? lang[1] : lang[2],
            image: {
                url: user.displayAvatarURL({ dynamic: true, size: 4096 }),
            },
        } });

    }
}

module.exports = Avatar;*/
// ██████ Integrations █████████████████████████████████████████████████████████

// —— Import base command
//const Command = require("../../Structures/Command")

//    , { GuildMember } = require("discord.js")
//  , { resolveUser }  = require ("../../Structures/Util");
/*const Discord = require('discord.js');
const GuildMember = require('discord.js');
const resolveUser = require ("../../Structures/Util");
// ██████ | ███████████████████████████████████████████████████████████ | ██████

module.exports = General = {
const Discord = require('discord.js'),
const GuildMember = require('discord.js'),
const resolveUser = require ("../../Structures/Util"),

    async run(message, args) {

    avatar : (message, GuildMember, resolveUser)=>{
        //super( {
            
            ({
            name        : "avatar",
            description : "Returns the profile image of a player.\n> Targeting by mention, username, or ID",
            usage       : "avatar {@mention || username || ID}",
            exemple     : ["662331369392832512", "@Luna", "Luna"],
            args        : false,
            category    : "General",
            cooldown    : 1000,
            aliases     : ["pp"],
            permLevel   : 0,
            userPerms   : "SEND_MESSAGES",
            allowDMs    : true,
        })
    },
    embed: {
            description: message.author.id === user.id ? lang[1] : lang[2],
            image: {
                url: user.displayAvatarURL({ dynamic: true, size: 4096 }),
            },
}
}
}*/