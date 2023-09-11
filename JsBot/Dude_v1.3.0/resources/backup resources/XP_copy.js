
// ██████████████████████████████ Initialization and imports █████████████████████████████████████████████████████████
const Sequelize = require('sequelize');
const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
const token = require('../config.json');
const prefix = '!';
const client = new Client({
    intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.GuildBans,]})

// ██████████████████████████████ Database Initialize █████████████████████████████████████████████████████████


const sequelize = new Sequelize('database', 'user', 'password', {
	host:		'localhost',
	dialect:	'sqlite',
	logging: 	false,
	// SQLite only
	storage: 	'databaseXP3.sqlite',
});


// ██████████████████████████████ Database Definition █████████████████████████████████████████████████████████


	const Users = sequelize.define('Users', {//Xp is currency and xp is balance
		user_id:			{
			type: Sequelize.STRING, 
			allowNull: false, 
			unique: true, 
			primaryKey: true,
						},
		user_name:			{
			type: Sequelize.STRING,		
						},
		xp:				{
                	type: Sequelize.INTEGER,
                        defaultValue: 0,
                        allowNull: false,
                 				},
		},); /*{
		                timestamps: false,
	});*/

// ██████████████████████████████ ORM Sequelize  █████████████████████████████████████████████████████████

	Reflect.defineProperty(Users, 'add', {
		/* eslint-disable-next-line func-name-matching */
		value: async function add(id,userName, amount) {
			const user = Users.get(id);
//console.log(`${user}`)
			const name = Users.get(userName);
//console.log(`${name}`)
			if (user) {
				user.xp += Number(amount);
				return user.save();
			}
			const newUser = await Users.create({ user_id: id, user_name: userName, xp: amount });
			Users.set(id, newUser);
			return newUser;
		},
	});


	Reflect.defineProperty(Users, 'getxp', {
		/* eslint-disable-next-line func-name-matching */
		value: function getxp(id) {
			const user = Users.get(id);
			return user ? user.xp : 0;
		},
	});
	
// ██████████████████████████████ Discord Initialize  █████████████████████████████████████████████████████████

client.once('ready', async () => {


sequelize.sync()
  .then(async () => {
//const User = Users.user_id
//console.log(User, Users.user_id, Users)
const storedxp = await Users.user_id.findAll();//  const userToUpdate = await Xp.findOne({ where: { user_id: 'someUserId' } });
console.log(Users, storedxp)
//if (storedxp){				//    if (userToUpdate) {
storedxp.forEach(b => xp.set(b.user_id, b));//userToUpdate.someField = 'new value';
//await storedxp.save();      		//await userToUpdate.save(); // Save the changes to this specific record
//    }

console.log('Xp Database Synced and Online');
//console.log(storedxp);
  })
//  .catch((error) => {
//  console.error('Error syncing the database:', error);
//  });


});


// ██████████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████

client.on('message', async message => {
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	console.log(args)
	const commandName = args.shift().toLowerCase();
	const msg = message;
	let lvl = 1;
	  // Update xp for the user
  	let user = await Users.findOne({ where: { user_id: message.author.id } });

  	if (!user) {
   		 user = await Users.create({ user_id: message.author.id, user_name: message.author.username });
 		 }
	let xp = Users.user_id.xp;
	xp++;
	let level= 5 * (lvl ^ 2) + (50 * lvl) + 100 - xp;
	let Nlevel = 1 ;

	if(Nlevel <= level){ 
		message.channel.send(`\🆙 | ${message.author} You've leveled up to **\`${level + 1}\`**`)
		return Users.xp
  	}
	if (commandName === 'xp') {
		//const xp  = 
		// Find the user's data in the database
    		const userData = await Users.findOne({ where: { user_id: target.id } });

    		if (userData) {
      		return message.channel.send(`${target.tag} has ${userData.xp}💰`);
		//await Users.findOne({ where: { id: user_id, name : user_name } });
		//if (xp) {
			//const target = message.mentions.users.first() || message.author;
			//return message.channel.send(`${target.tag} has ${Users.getxp(target.id)}💰`);

		}}

})

client.login(token.Token);

// ██████████████████████████████ Discord Client Initiated  █████████████████████████████████████████████████████████



