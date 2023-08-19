//exports.run = async (client, message, args) => {
    client = require('discord.js');
    module.exports={
        name: 'mutent',
    description : ' Un Mute Cmd',
    execute(message, args){
            if (message.content.startsWith('!mutent')){
                let id = args[0];
                //let logchannel = message.guild.channels.find('name', 'cgr420-logs');
                //let role = message.guild.roles.cache.find('name', 'Muted')
                
                //if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username}, Sorry, you need \`MANAGE_ROLES\` Permission to use this commands**!`).then(msg=>msg.delete(7000));
                //if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, I need the following permission to \`mute\` command to work: \`MANAGE_ROLES\`**!`).then(msg=>msg.delete(7000));

                let member = message.mentions.members.first()// || message.guild.members.id;
                
                if (!member) return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`).then(msg=>msg.delete(7000));
                
                let muterole = message.guild.roles.cache.find(x => x.name === 'Muted');
                let botrole = message.guild.roles.cache.find(x => x.name === 'humanified');
                if (!member.roles.cache.has(muterole.id)) return message.channel.send(`**${member.user.username} Not muted yet**.`).then(msg=>msg.delete(7000));
                console.log( muterole.id, member.id)
                //(member.remove(muterole));
                //if (!message.guild.members.roles.has('muterole')) return message.reply(`:no_entry_sign: I cannot unmute that member`);
                //message.guild.member.roles.remove(muterole.id, member.id);
                member.roles.add(botrole);
                member.roles.remove(muterole);
                message.channel.send(`**${member.user.username} Has been unmuted**.`);
            }
    }
}
/* 
NO ID MUTE
NO BOT CHECKING
NO ROLE CREATE AND ASSSIGN BY ID
NO PERM CHECK FOR MUTE N UNMUTE
*/


/*
exports.conf = {
    aliases: []
}

exports.help = {
    name: "unmute",
    description: "Unmute someone",
    usage: "unmute @mention"
}
*/
/*Role {
  guild: <ref *1> Guild {
    members: GuildMemberManager {
      cacheType: [class Collection extends Collection],
      cache: [Collection [Map]],
      guild: [Circular *1]
    },
    channels: GuildChannelManager {
      cacheType: [class Collection extends Collection],
      cache: [Collection [Map]],
      guild: [Circular *1]
    },
    roles: RoleManager {
      cacheType: [class Collection extends Collection],
      cache: [Collection [Map]],
      guild: [Circular *1]
    },
    presences: PresenceManager {
      cacheType: [class Collection extends Collection],
      cache: [Collection [Map]]
    },
    voiceStates: VoiceStateManager {
      cacheType: [class Collection extends Collection],
      cache: Collection(0) [Map] {},
      guild: [Circular *1]
    },
    deleted: false,
    available: true,
    id: '793825616901832725',
    shardID: 0,
    name: 'f and g 2',
    icon: null,
    splash: null,
    discoverySplash: null,
    region: 'russia',
    memberCount: 17,
    large: false,
    features: [],
    applicationID: null,
    afkTimeout: 300,
    afkChannelID: null,
    systemChannelID: '793825616901832728',
    embedEnabled: undefined,
    premiumTier: 0,
    premiumSubscriptionCount: 0,
    verificationLevel: 'NONE',
    explicitContentFilter: 'DISABLED',
    mfaLevel: 0,
    joinedTimestamp: 1612296693456,
    defaultMessageNotifications: 'ALL',
    systemChannelFlags: SystemChannelFlags { bitfield: 0 },
    maximumMembers: 100000,
    maximumPresences: null,
    approximateMemberCount: null,
    approximatePresenceCount: null,
    vanityURLCode: null,
    vanityURLUses: null,
    description: null,
    banner: null,
    rulesChannelID: null,
    publicUpdatesChannelID: null,
    preferredLocale: 'en-US',
    ownerID: '637598340154130432',
    emojis: GuildEmojiManager {
      cacheType: [class Collection extends Collection],
      cache: [Collection [Map]],
      guild: [Circular *1]
    }
  },
  id: '824001007851012106',
  name: 'Muted',
  color: 11429888,
  hoist: false,
  rawPosition: 14,
  permissions: Permissions { bitfield: 66560 },
  managed: false,
  mentionable: false,
  deleted: false
} 824001007851012106 */
