//exports.run = async (client, message, args) => {
const client = require('discord.js')
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
module.exports={
    name: 'mute',
    description : 'Mute Cmd',
    execute(message, args){
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
		if(!message.member.permissions.has(["MANAGE_ROLES"]))
		return message.channel.send("I am sorry but you were not given the permission to use this command yet")

		//if (message.content.startsWith('!mute')){
                //if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, you need \`MUTE_MEMBERS\` Permission to use this commands**!`).then(msg=>msg.delete(7000));
                //if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`**${message.author.username}, Sorry, I need the following permission to \`mute\` command to work: \`MANAGE_ROLES\`**`).then(msg=>msg.delete(7000));
                let id = args[0];

                let member = message.mentions.members.first() || message.guild.members.id;
                if (!member) return message.channel.send(`**${message.author.username}, Sorry, I can't find the user you mean**!`);
                
                let muterole = message.guild.roles.cache.find(x => x.name === "Muted");
                if (!muterole) {
                    try {/*message.guild.roles.create({
                        data: {name: "My Role"}
                    }).then(role => {
                        message.channel.send(`${role.name} created!`);
                    });*/
                        muterole =  message.guild.roles.create({
                            name: "Muted",
                            color: '#000000',
                            permission: [] 
                            });
                message.guild.channels.cache.forEach(async (channel, id) => {
                     //channel.overwritePermissions
                    await message.channel.overwritePermissions([
                        {
                           id: message.author.id,
                           deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
                        },
                      ]);
                    /*muterole, [{
                        
                        SEND_MESSAGES: false,
                        ADD_REACTION: false,
                        CONNECT: false
                    }]);*/
                	});
        		}   
		catch(e) {
                console.log(e.message);
        
			}
    			};

		if (member.roles.cache.has(muterole.id)) return message.channel.send(`**${member.user.username}** is already muted.`)
		//(member.addRole(muterole.id));
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
		member.roles.add(muterole);
		//muterole.add(member)
		message.channel.send(`**${member.user.username}, Has been muted**.`);
}
}

