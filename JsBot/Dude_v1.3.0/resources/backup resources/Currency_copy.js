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


// ██████████████████████████████ Old Currency js  █████████████████████████████████████████████████████████











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

// ██████████████████████████████ New Currency js  █████████████████████████████████████████████████████████
//client.commands = new Collection();
const currency = new Collection();

client.once('ready', async () => {
	const storedBalances = await Users.findAll();
	storedBalances.forEach(b => currency.set(b.user_id, b));
	console.log('Currency Database Synced and Online');
});




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

client.on('messageCreate', async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	console.log(args)
	const commandName = args.shift().toLowerCase();
//	console.log(commandName)
//	const command = client.commands.get(commandName);
//	console.log(command)
	try {
        // Execute the command
        await //commandName.execute(message, args);
	console.log(commandName)	}
    	catch (e) {console.log(e)
	if (e.name === 'SequelizeUniqueConstraintError') {
	console.log(e.name)
        message.reply('There was an error trying to execute that command.');
    }}

/*
 let cooldown = 43200000; // 12 hours in ms

  let lastDaily = message.author.id//await db.fetch(`daily_${message.author.id}`);

  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    // If user still has a cooldown
    let timeObj = (cooldown - (Date.now() - lastDaily))/1000; // timeObj.hours = 12
	console.log('still on cd', timeObj,cooldown)
} else {
console.log('here is ur daily',cooldown )
    // Otherwise they'll get their daily
  }
*/

if (commandName === 'daily') {
//const user = message.author//currency.get(id);
/*try {
        // Execute the command
	
        await //user.upsert({ user_id: message.author.id, balance: 100 });//commandName.execute(message, args);
	console.log(commandName)	}
    	catch (e) {console.log(e)
	if (e.name === 'SequelizeUniqueConstraintError') {
	console.log(e.name)
        message.reply('There was an error trying to execute that command.');
    }}
//	await addBalance.Upsert(message.author.id, 100)
//	console.log('ok')
//	if(user){
	setTimeout(() => {
          // Removes the user from the set after a minute
*/      addBalance(message.author.id, 100)  
	message.reply('100 added to balance');
//        }, 60000)
	
//	console.log(message.author.id + ' 100' )
//	}
//	else message.reply('wait for 6s')
	//{return message.reply(`You need to wait ${hours} hours, ${minutes} minutes, and ${seconds} seconds before changing your balance again.`)}
}

else if (commandName === 'bal'){//['balance', 'bal', 'money']) {
		// [gamma] SHOW BALANCES
		const target = message.mentions.users.first() || message.author;
		return message.channel.send(`${target.tag} has ${getBalance(target.id)}💰`);

	}
else if (commandName === 'inv'){//['inventory', 'inv', 'items']) {
		// [delta] SHOW INVENTORY OR ITEMS
		const target = message.mentions.users.first() || message.author;
//console.log('target =', target)
		const user = await Users.findOne({ where: { user_id: target.id } });
//console.log('user =', user)		
		const items = await user.getItems();
/*		const item1 = [];
		for (const item of items) {
		    // Create a description for each item (e.g., "3 apples")
		    const item = `${items.amount} ${items.item}`;
console.log(items.name, items.currency_shop, item.name)    
		    // Add the item description to the array
		    item.push(item1);
		}
		const itemList = item.join(', ');
return message.reply(`${targetTag} currently has ${itemList}`);*/
//console.log('items',items, items.name)
//function items.map(i=> i.amount + i.item.name){}
		//let amount = `${i.amount}`
		//let name = `${i.item.name}`
		//itemName = `${items.map(i => amount name ).join(', ')}`
//console.log('itemName = ',itemName, 'a=' amount,'n= ' name)
		//if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
//return message.reply(`${target.tag} has ${getBalance(target.id)} and ${items.name}`);

//return message.channel.send(`${target.tag} currently has ${itemName}`);
//return interaction.reply(`${target.tag} currently has ${items.map(i => `${i.amount}, ${i.item.name}))}`});}
return message.reply(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
	}

else if (commandName === 'give'){//['transfer', 'give', 'gv', 'award']) {
		// [epsilon] TRANSFER OR GIVE BALANCES
		//const amount = 
        	//const person = args.join(' ');
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

return message.channel.send(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${getBalance(message.author.id)}💰`);
	}

else if (commandName === 'buy') {
		// [zeta]
		//const itemnum = args.shift()
//console.log('itemnum =',itemnum)
		const itemName = args.join(' ').toLowerCase()//.getString('item'); // Combine all args into a single string and convert to lowercase
//console.log('itemname =',itemName)
		 // Use Sequelize's 'iLike' for case-insensitive search
		const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: itemName } } })//({ where: { name: { [Op.iLike]: itemName } } });
//console.log('item=',item)
//		const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: args } } });
		if (!item) 
		return message.channel.send(`That item doesn't exist.`);
		if (item.cost > getBalance(message.author.id)) {
return message.channel.send(`You currently have ${getBalance(message.author.id)}, but the ${item.name} costs ${item.cost}!`);
		}

		const user = await Users.findOne({ where: { user_id: message.author.id } });
//console.log(user)		
		addBalance(message.author.id, -item.cost);
		await user.addItem(item);

		message.channel.send(`You've bought: ${item.name}.`);

	} 
else if (commandName === 'shop') {
		// [theta]
		const items = await CurrencyShop.findAll();
return message.channel.send(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });


	} 
else if (commandName === 'lb'){//['leaderboard', 'lb']) {
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


/*if (commandNameName === 'balance' || 'bal') {
		const target = interaction.options.getUser('user') || interaction.user;

		return interaction.reply(`${target.tag} has ${getBalance(target.id)}💰`);
	} *
else if (commandName === 'inventory' || 'inv') {
		const target = interaction.options.getUser('user') || interaction.user;
		const user = await Users.findOne({ where: { user_id: target.id } });
		const items = await user.getItems();

		if (!items.length) return interaction.reply(`${target.tag} has nothing!`);

		return interaction.reply(`${target.tag} has ${getBalance(target.id)} and ${items.name}`);

//return interaction.reply(`${target.tag} currently has ${items.map(t => ${t.amount} ${t.item.name})}`)//.join(', ')}`); 
		}
		else if (commandName === 'transfer') {
		const currentAmount = getBalance(interaction.user.id);
		const transferAmount = interaction.options.getInteger('amount');
		const transferTarget = interaction.options.getUser('user');

		if (transferAmount > currentAmount) return interaction.reply(`Sorry ${interaction.user} you don't have that much.`);
		if (transferAmount <= 0) return interaction.reply(`Please enter an amount greater than zero, ${interaction.user}`);

		addBalance(interaction.user.id, -transferAmount);
		addBalance(transferTarget.id, transferAmount);

		return interaction.reply(`Successfully transferred ${transferAmount}💰 to ${transferTarget.tag}. Your current balance is ${getBalance(interaction.user.id)}💰`);
	} else if (commandName === 'buy') {
		const itemName = interaction.options.getString('item');
		const item = await CurrencyShop.findOne({ where: { name: { [Op.like]: itemName } } });

		if (!item) return interaction.reply('That item doesn\'t exist.');
		if (item.cost > getBalance(interaction.user.id)) {
			return interaction.reply(`You don't have enough currency, ${interaction.user}`);
		}

		const user = await Users.findOne({ where: { user_id: interaction.user.id } });
		addBalance(interaction.user.id, -item.cost);
		await user.addItem(item);

		return interaction.reply(`You've bought a ${item.name}`);
	} else if (commandName === 'shop') {
		const items = await CurrencyShop.findAll();
		return interaction.reply(Formatters.codeBlock(items.map(i => `${i.name}: ${i.cost}💰`).join('\n')));
	} else if (commandName === 'leaderboard' || 'lb') {
		return interaction.reply(
			Formatters.codeBlock(
				currency.sort((a, b) => b.balance - a.balance)
					.filter(user => client.users.cache.has(user.user_id))
					.first(10)
					.map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
					.join('\n'),
			),
		);
	}*/
});

client.login(token.Token);


/*client.on(Events.MessageCreate, async message => {
	if (message.author.bot) return;
	addBalance(message.author.id, 1);
}); */

/*client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	const { commandName } = interaction;
   	//if(message.content === 'daily')
	//currency.add(message.author.id, 1);
	const input = message.content.slice(prefix.length).trim();
	
    	if (!input.length) return;
	const [ command, commandArgs] = input.match(/(\w+)\s*([\s\S]*)/);
	

	
if (command === 'daily'){
        currency.add(message.author.id, 100)
	message.channel.send('100 added to balance')
	return interaction.reply('100 added to balance')
    }
*

client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.user.bot) return;

    const { commandName, options } = interaction;

    if (commandName === 'daily') {
        // Handle the 'daily' command here
        // Assuming you have a currency system in place
        // You can access command options using options.get('optionName')
        // For example, options.get('amount')
        
        // For this example, we're just sending a response
        interaction.reply('100 added to balance');}

        // If you want to send a message to the same channel where the command was used:
        // interaction.followUp('100 added to balance');*
client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Check if the command exists in your command collection
    const command = client.commands.get(commandName);
    if (!command) return;

    try {
        // Execute the command
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command.');
    }



// Define your 'daily' command
client.commands.set('daily', {
    execute: (message) => {
        // Handle the 'daily' command here
        // Assuming you have a currency system in place
        // You can access message content and arguments as needed
        
        // For this example, we're just sending a response
        message.reply('100 added to balance');
    }
})
*/




