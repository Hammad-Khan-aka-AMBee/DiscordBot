// ██████████████████████████████ Initialization and imports █████████████████████████████████████████████████████████
const Sequelize = require('sequelize');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = require('../config.json');
const prefix = '!';
const client = new Client({
    intents: [//GatewayIntentBits.AllIntents
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildBans,]})


// ██████████████████████████████ DataBase Initialization █████████████████████████████████████████████████████████

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'databaseTagNew.sqlite',
});

// ██████████████████████████████ Database Definition █████████████████████████████████████████████████████████

const Tags = sequelize.define('tags', 	{
	name: 				{
		type: Sequelize.STRING,
		unique: true,
					},
	description: Sequelize.TEXT,
	username: Sequelize.STRING,
	usage_count: 			{
		type: Sequelize.INTEGER,
		defaultValue: 0,
		allowNull: false,
					},
					});

// ██████████████████████████████ Discord Initialize  █████████████████████████████████████████████████████████

client.once(Events.ClientReady, () => {
	/*
	 * equivalent to: CREATE TABLE tags(
	 * name VARCHAR(255),
	 * description TEXT,
	 * username VARCHAR(255),
	 * usage_count INT NOT NULL DEFAULT 0
	 * );
	 */
	Tags.sync();

	console.log('Tags Synced and Online');
});

// █████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████

client.on('messageCreate', async (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
			if (commandName === 'tagadd') {
	       		 // [delta]
        		const tagName = args.shift();
        		const tagDescription = args.join(' ');

        		try {
        	    	// equivalent to: INSERT INTO tags (name, description, username) values (?, ?, ?);
        		const tag = await Tags.create({
                	name: tagName,
                	description: tagDescription,
                	username: message.author.username,
            		});
            		return message.reply(`Tag ${tag.name} added.`);
        		} 
			catch (e) {console.log(e) // add this perhaps it might show error after running command
            		if (e.name === 'SequelizeUniqueConstraintError') {
                	return message.reply('That tag already exists.');
            		}
            		return message.reply('Something went wrong with adding a tag.');
        		}

    			} 
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧	 
			else if (commandName === 'tag') {
			const tagName = args;

			// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
			const tag = 
			await Tags.findOne({ where: 	{ name: tagName } });
			if (tag) {
				// equivalent to: UPDATE tags SET usage_count = usage_count + 1 WHERE name = 'tagName';
			tag.increment('usage_count');
			return message.channel.send(tag.get('description'));
			}
			return message.reply(`Could not find tag: ${tagName}`);
			}  
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
			else if (commandName === 'tagedit') {
			// [zeta]
			const tagName = args.shift()
			const tagDescription = args.join(' ');

			// equivalent to: UPDATE tags (description) values (?) WHERE name='?';
			const affectedRows = 
			await Tags.update	({ description: 	tagDescription }, 
						{ where: 		{ name: tagName } });
			
								
			if (affectedRows > 0) {
				return message.reply(`Tag ${tagName} was edited.`);
			}
			return message.reply(`Could not find a tag with name ${tagName}.`);
			}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧ 
			else if (commandName === 'taginfo') {
			// [theta]

			const tagName = args;

			// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
			const tag = 
			await Tags.findOne		({ where: 	{ name: tagName } });
			if (tag) {
			return message.channel.send(`${tagName} was created by ${tag.username}  and has been used ${tag.usage_count} times.`);
			}
			return message.reply(`Could not find tag: ${tagName}`);

			} 
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
			else if (commandName === 'tagremove') {
			// [mu]
			const tagName = args;
			// equivalent to: DELETE from tags WHERE name = ?;
			const rowCount = 
			await Tags.destroy		({ where: 		{ name: tagName } });
			if (!rowCount) 
			return message.reply('That tag did not exist.');

			return message.reply('Tag deleted.');
			}
//✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧✧✦✧
			else if (commandName === 'tagsall') {
			// [lambda]
			// equivalent to: SELECT name FROM tags;
			const tagList = await Tags.findAll({ attributes: ['name'] });
			const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
			return message.channel.send(`List of tags: ${tagString}`);
}
});

client.login(token.Token);
// █████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████