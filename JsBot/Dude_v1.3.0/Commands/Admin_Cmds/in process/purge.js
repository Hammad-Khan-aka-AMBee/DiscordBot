/*	else if (message.content.startsWith('!del')) {
        const amount = parseInt(args[0]);
        console.log(amount);
        if (!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}, Sorry but you need \`MANAGE_MESSAGES\` Permission to use this command.**`).then(m => m.delete({ timeout: 7000 }));

        if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`**${message.author.username}, Uh i want do this but i need following permission to \`purge\` to work: \`MANAGE_MESSAGES\`**`).then(x => x.delete({ timeout: 7000 }));

        if (isNaN(args[0])) return message.channel.send(`**${message.author.username}, Please supply a valid amount of messages to purge**!`);

        else if (amount < 2 || amount > 100) return message.channel.send(`**${message.author.username}, Please supply a number less than 100**!`).then(u => u.delete({ timeout: 7000 }));

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('there was an error trying to prune messages in this channel!');
        });
    }
*/