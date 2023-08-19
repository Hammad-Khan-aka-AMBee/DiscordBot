const Discord = require('discord.js');
const Sequelize = require('sequelize');

const client = new Discord.Client();
const PREFIX = '!';
const token = require('../config.json');
console.log(token.Token)


const sequelize = new Sequelize('database', 'user', 'password', {
	host:		'localhost',
	dialect:	'sqlite',
	logging: 	false,	// SQLite only
	storage: 	'databaseTags.sqlite',
});

// [alpha]	
// [beta]

/*
 * equivalent to: CREATE TABLE tags(
 * name VARCHAR(255),
 * description TEXT,
 * username VARCHAR(255),
 * usage INT
 * );
 */
const Tags = sequelize.define('tags', {// HERE CHANGING
	name:		{
						type: Sequelize.STRING,
						unique: true,
				},
	description: 	Sequelize.TEXT,
	username: 		Sequelize.STRING,
	usage_count:{
						type: Sequelize.INTEGER,
						defaultValue: 0,
						allowNull: false,
				},
});


client.once('ready', () => {
	// [gamma]
	Tags.sync();
	console.log('Tags Synced')
});

client.on('message', async message => {
	if (message.content.startsWith(PREFIX)) {
		const input = message.content.slice(PREFIX.length).trim().split(' ');
		const command = input.shift();
		const commandArgs = input.join(' ');

		if (command === 'tagadd') {
			// [delta]
			const splitArgs = commandArgs.split(' ');
			const tagName = splitArgs.shift();
			const tagDescription = splitArgs.join(' ');

		try {
			// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
			const tag = 
			await Tags.create({
				
		
				name: 			tagName,
				description: 	tagDescription,
				username: 		message.author.username,
			
			
			});
			return message.reply(`Tag ${tag.name} added.`);
		}
		catch (e) {
			if (e.name === 'SequelizeUniqueConstraintError') {
				return message.reply('That tag already exists.');
			}
			return message.reply('Something went wrong with adding a tag.');
		}
		// HERE CHANGING

		} else if (command === 'tag') {
			// [epsilon]

			const tagName = commandArgs;

			// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
			const tag = 
			await Tags.findOne({ where: 	{ name: tagName } });
			if (tag) {
				// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
				tag.increment('usage_count');
				return message.channel.send(tag.get('description'));
			}
			return message.reply(`Could not find tag: ${tagName}`);

		} else if (command === 'tagedit') {
			// [zeta]

			const splitArgs = commandArgs.split(' ');
			const tagName = splitArgs.shift();
			const tagDescription = splitArgs.join(' ');

			// equivalent to: UPDATE tags (description) values (?) WHERE name='?';
			const affectedRows = 
			await Tags.update	({ description: 	tagDescription }, 
								{ where: 		{ name: tagName } });
			
								
			if (affectedRows > 0) {
				return message.reply(`Tag ${tagName} was edited.`);
			}
			return message.reply(`Could not find a tag with name ${tagName}.`);

		} else if (command === 'taginfo') {
			// [theta]

			const tagName = commandArgs;

			// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
			const tag = 
			await Tags.findOne		({ where: 	{ name: tagName } });
			if (tag) {
				return message.channel.send(`${tagName} was created by ${tag.username}  and has been used ${tag.usage_count} times.`);
			}
			return message.reply(`Could not find tag: ${tagName}`);

		} else if (command === 'tagsall') {
			// [lambda]
			// equivalent to: SELECT name FROM tags;
			const tagList = await Tags.findAll({ attributes: ['name'] });
			const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
			return message.channel.send(`List of tags: ${tagString}`);

		} else if (command === 'tagremove') {
			// [mu]
			const tagName = commandArgs;
			// equivalent to: DELETE from tags WHERE name = ?;
			const rowCount = 
			await Tags.destroy		({ where: 		{ name: tagName } });
			if (!rowCount) 
			return message.reply('That tag did not exist.');

			return message.reply('Tag deleted.');

		}
	}
});
//}
//}

client.login(token.Token);