// ██████████████████████████████ Initialization and imports █████████████████████████████████████████████████████████
const Discord = require('discord.js');
const { Op, Sequelize } = require('sequelize');
const { Client, codeBlock, Collection, Events, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const token = require('../config.json');
const { Users, CurrencyShop, UserItems } = require('./dbObjects');
//const time = require('../processes/time.js') //const Sequelize = require('sequelize');
const prefix = '!';

const client = new Client({
    intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildBans,]
})


// ██████████████████████████████  Sequelize Functions Defined  █████████████████████████████████████████████████████████

	async function addBalance(id, amount) {
		const user = currency.get(id);

		if (user) {
		user.balance += Number(amount);
		return user.save();
		}

		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	}

	function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	}

// ██████████████████████████████   Discord Initialize  █████████████████████████████████████████████████████████
//client.commands = new Collection();
const currency = new Collection();

client.once('ready', async () => {
	//await users.sync();
	const storedBalances = await Users.findAll();
	storedBalances.forEach(b => currency.set(b.user_id, b));
	console.log('Currency Database Synced and Online');
	});


// ██████████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████
client.on('messageCreate', async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	try {
        await //commandName.execute(message, args);
	console.log(commandName)	}
    	catch (e) {console.log(e)
	if (e.name === 'SequelizeUniqueConstraintError') {
	console.log(e.name)
        message.reply('There was an error trying to execute that command.');
	}}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	if (commandName === 'daily') {
	
	const exampleEmbed = new EmbedBuilder()
		.setTitle('DAILY')
		.setThumbnail('https://cdn.discordapp.com/attachments/855790392742248458/1150408972604538880/Untitled_design_1.gif')
		.setDescription('100 added to balance')
		.setColor('#FFD700')
		.setAuthor({ name: ` ${message.author.username}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`})
		.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})
		.setTimestamp()

		const time = 86400000;

		message.channel.send('wait for 3 hours for transaction to happen').then(() => {
		console.log('timeout set for 3 hour')
		//addBalance(message.author.id, 100) 
  		setTimeout(()=>{
		addBalance(message.author.id, 100) 
    		message.channel.send({ embeds: [exampleEmbed] })
		console.log('timeout expired') 
  			},10800000)
		});
		

	//{return message.reply(`You need to wait ${hours} hours, ${minutes} minutes, and ${seconds} seconds before changing your balance again.`)}
}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	else if (commandName === 'bal' || commandName ==='balance' || commandName ==='money'){
		// [gamma] SHOW BALANCES
		const target = message.mentions.users.first() || message.author;
		return message.channel.send(`<:peni:1150412562173796392>${target.tag} has ${getBalance(target.id)} penies in wallet<:money:1150413081495732274>`);
	}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	else if (commandName === 'inv' || commandName ==='inventory' || commandName ==='items'){
		// [delta] SHOW INVENTORY OR ITEMS
		const target = message.mentions.users.first() || message.author;
		const user = await Users.findOne({ where: { user_id: target.id } });
		const items = await user.getItems();
//		const inv =`${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`
//console.log(inv, `${inv}`);
//	return message.reply(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
	
	const exampleEmbed = new EmbedBuilder()
	//	.setURL(`[ ${message.guild.name}](https://discord.gg/C8yKeff7YH)`)
		.setTitle('<:D_Cafe_diamond_pink:854060299434983456>INVENTORY<:D_Cafe_diamond_pink:854060299434983456>')
		.setThumbnail('https://cdn.discordapp.com/attachments/855790392742248458/1150408973057531986/Untitled_design.gif')
		.setDescription(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`)
		.setColor('#FFD700')
		.setImage()
		.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})

		message.channel.send({ embeds: [exampleEmbed]})	
}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	else if (commandName === 'give' || commandName ==='transfer' || commandName ==='gv' || commandName ==='award'){
		// [epsilon] TRANSFER OR GIVE BALANCES
		const currentAmount = getBalance(message.author.id);
		const transferAmount = args.shift().split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));// args.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
		const transferTarget = message.mentions.users.first();

		if (!transferAmount || isNaN(transferAmount)) 
		return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);

		if (transferAmount > currentAmount) 
		return message.channel.send(`Sorry ${message.author}, you only have ${currentAmount}.`);
	
		if (transferAmount <= 0) 
		return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

		addBalance(message.author.id, -transferAmount);
		addBalance(transferTarget.id, transferAmount);

	return message.channel.send(`Successfully transferred ${transferAmount}<:peni:1150412562173796392> to ${transferTarget.tag}. Your current balance is ${getBalance(message.author.id)}<:money:1150413081495732274>`);
	}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	else if (commandName === 'buy') {
		// [zeta]
		const itemName = args.join(' ').toLowerCase() 
		const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: itemName } } })//({ where: { name: { [Op.iLike]: itemName } } });
		if (!item) 
		return message.channel.send(`That item doesn't exist.`);
		if (item.cost > getBalance(message.author.id)) {
		return message.channel.send(`You currently have ${getBalance(message.author.id)}, but the ${item.name} costs ${item.cost}!`);
		}

		const user = await Users.findOne({ where: { user_id: message.author.id } });
		addBalance(message.author.id, -item.cost);
		await user.addItem(item);

		message.channel.send(`You've bought: ${item.name}.`);

	} 
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
	else if (commandName === 'shop' || commandName === 'market') {
		// [theta]
		const items = await CurrencyShop.findAll();

		const exampleEmbed = new EmbedBuilder()
	//	.setURL(`[ ${message.guild.name}](https://discord.gg/C8yKeff7YH)`)
		.setTitle('♦️Server 𝐃.𝐂𝐀𝐅é☕ SHOP♦️')
		.setThumbnail('https://cdn.discordapp.com/attachments/734438955822350346/1149936827155873932/Cafe.gif')
		.setDescription(items.map(item => `${item.name}    Price: $${item.cost}  <:money:1150413081495732274>`).join('\n'), { code: true })
		.setColor('#FFD700')
		.setImage()
		.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})
	message.channel.send({ embeds: [exampleEmbed]})//return message.channel.send();
	}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧ 
	else if (commandName === 'lb' || commandName ==='leaderboard'){
		// [lambda]

		let leaderboard = currency.sort((a, b) => b.balance - a.balance)
				.filter(user => client.users.cache.has(user.user_id))
				.first(10)
				.map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}<:money:1150413081495732274>`)
				.join('\n')//,
				//{ code: true },
		//);
		const exampleEmbed = new EmbedBuilder()
	//	.setURL(`[ ${message.guild.name}](https://discord.gg/C8yKeff7YH)`)
		.setTitle('<:D_Cafe_diamond_green:854060536597184582>Server Money LeaderBoard<:D_Cafe_diamond_green:854060536597184582>')
		.setThumbnail('https://cdn.discordapp.com/attachments/855790392742248458/1150408973057531986/Untitled_design.gif')
		.setDescription(`Leaderboard:\n${leaderboard}`, { code: true })
		.setColor('#FFD700')
		.setImage()
		.setFooter({ text:`Requested by: ${message.author.tag} | Presented by: ${!message.author.bot} Doodle v1.3.1 | Made by: dragonn`,iconURL :'https://cdn.discordapp.com/avatars/731809267266617368/a7586cf21bd2377d5bf196138dec047e.webp?size=4096'})

		message.channel.send({ embeds: [exampleEmbed]})
	}



else if (commandName === 'gift') {
		// [zeta]
		const itm = args[0] 
//console.log(itm)
		const it = args[1]
//console.log(it)		
		const transferTarget = message.mentions.users.first();
//console.log(transferTarget)		
		const itemName = args[0].toLowerCase() 
//console.log(itemName)		
		const user1 = await Users.findOne({ where: { user_id: message.author.id } });
//console.log(user1)		
		const user = await Users.findOne({ where: { user_id: transferTarget.id } });
//console.log(user)
//		const items = await user1.getItems();
		const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: itemName } } })
//console.log(item)
		if (!item) 
		return message.channel.send(`That item doesn't exist`);
		if (item.cost > getBalance(message.author.id)) {
		return message.channel.send(`You currently have ${getBalance(message.author.id)}, but the ${item.name} costs ${item.cost}!`);
		}

		if(item){
		addBalance(message.author.id, -item.cost);
		await user.addItem(item);
		}
		message.channel.send(`You've sent:🎁 ${item.name}. to ${transferTarget}<:emoji_41:854998868742504458>`);

	} 
});
client.login(token.Token);
// ██████████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████
