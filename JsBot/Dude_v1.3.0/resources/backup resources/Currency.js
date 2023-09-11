/*const { Op } = require('sequelize');
const { Client, Collection, Events, Formatters, GatewayIntentBits } = require('discord.js');
const { Users, CurrencyShop } = require('./DBObjects.js');
//const { prefix, token } = require('../config.json');
const token = require('../config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const currency = new Collection();*/
const Discord = require('discord.js');
const { Op } = require('sequelize');
const { Client, codeBlock, Collection, Events, GatewayIntentBits } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
//const Sequelize = require('sequelize');
const token = require('../config.json');
const { Users, CurrencyShop, UserItems } = require('./DBObjects');
const currency = new Collection();
const PREFIX = '!';

const client = new Client({
    intents: [//GatewayIntentBits.AllIntents
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildBans,]
})

/*
client.once(Events.ClientReady, async () => {
	const storedBalances = await Users.findAll();
	storedBalances.forEach(b => currency.set(b.user_id, b));

	console.log('Currency Database Synced and Online');
});
*/














// Add method into currency
Reflect.defineProperty(currency, 'add', {
	/* eslint-disable-next-line func-name-matching */
	value: async function add(id, amount) {
		const user = currency.get(id);
		if (user) {
			user.balance += Number(amount);
			return user.save();
		}
		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);
		return newUser;
	},
});
// getting balance method
Reflect.defineProperty(currency, 'getBalance', {
	/* eslint-disable-next-line func-name-matching */
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});
// [alpha]

client.once('ready', async () => {
	// [beta]

// stored balances
const storedBalances = await Users.findAll();
storedBalances.forEach(b => currency.set(b.user_id, b));
	
//	console.log(`Logged in as ${client.user.tag}!`);
});

/*
async function addBalance(id, amount) {
	const user = currency.get(id);
	
//	if (user /*&& /*!lastBalanceChangeTime || !cd*) {
//     		user.balance += Number(amount);
//        	await user.save();
//        	
//	}
//	if (user) {
//	        await Users.findOne({ where: { user_id: id } });
		user.balance += Number(amount);
		return user.save();
		//userCooldowns[id] = currentTime;
//	}
//	if (!user){
	const newUser = await Users.create({ user_id: id, balance: amount });
	currency.set(id, newUser);

	return newUser;
//	}
/*
	else {
        const remainingCooldown = 24 * 60 * 60 * 1000 - (currentTime - lastBalanceChangeTime);
        const hours = Math.floor(remainingCooldown / (60 * 60 * 1000));
        const minutes = Math.floor((remainingCooldown % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((remainingCooldown % (60 * 1000)) / 1000);

        return remainingcooldown*
    //}
}
*/


client.on('message', async message => {
	if (message.author.bot) return;
    //if(message.content === 'daily')
	//currency.add(message.author.id, 1);

	if (!message.content.startsWith(prefix)) return;


	const input = message.content.slice(prefix.length).trim();
	
    if (!input.length) return;
	const [, command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);

    if (command === 'daily'){
        currency.add(message.author.id, 100)
	message.channel.send('100 added to balance');
    }

	if (command === 'bal'){//['balance', 'bal', 'money']) {
		// [gamma] SHOW BALANCES
		const target = message.mentions.users.first() || message.author;
		return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}💰`);

	} else if (command === 'inv'){//['inventory', 'inv', 'items']) {
		// [delta] SHOW INVENTORY OR ITEMS
		const target = message.mentions.users.first() || message.author;
		const user = await Users.findOne({ where: { user_id: target.id } });
		const items = await user.getItems();

		if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
		return message.channel.send(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);

	} else if (command === 'give '){//['transfer', 'give', 'gv', 'award']) {
		// [epsilon] TRANSFER OR GIVE BALANCES
		const currentAmount = currency.getBalance(message.author.id);
		const transferAmount = commandArgs.split(/ +/g).find(arg => !/<@!?\d+>/g.test(arg));
		const transferTarget = message.mentions.users.first();

		if (!transferAmount || isNaN(transferAmount)) return message.channel.send(`Sorry ${message.author}, that's an invalid amount.`);
		if (transferAmount > currentAmount) return message.channel.send(`Sorry ${message.author}, you only have ${currentAmount}.`);
		if (transferAmount <= 0) return message.channel.send(`Please enter an amount greater than zero, ${message.author}.`);

		currency.add(message.author.id, -transferAmount);
		currency.add(transferTarget.id, transferAmount);

		return message.channel.send(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${currency.getBalance(message.author.id)}💰`);


	} else if (command === 'buy') {
		// [zeta]
		const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: commandArgs } } });
		if (!item) return message.channel.send(`That item doesn't exist.`);
		if (item.cost > currency.getBalance(message.author.id)) {
			return message.channel.send(`You currently have ${currency.getBalance(message.author.id)}, but the ${item.name} costs ${item.cost}!`);
		}

		const user = await Users.findOne({ where: { user_id: message.author.id } });
		currency.add(message.author.id, -item.cost);
		await user.addItem(item);

		message.channel.send(`You've bought: ${item.name}.`);

	} else if (command === 'shop') {
		// [theta]
		const items = await CurrencyShop.findAll();
		return message.channel.send(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });


	} else if (command === 'lb'){//['leaderboard', 'lb']) {
		// [lambda]
		return message.channel.send(
			currency.sort((a, b) => b.balance - a.balance)
				.filter(user => client.users.cache.has(user.user_id))
				.first(10)
				.map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
				.join('\n'),
			{ code: true },
		);
		
	}
});
client.login(token.Token);
