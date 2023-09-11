const {Sequelize, DataTypes} = require('sequelize');
const { Client, GatewayIntentBits } = require('discord.js');
const token = require('../config.json');
const prefix = '!';
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildBans,
  ],
});

const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  logging: false,
  storage: 'databaseXP3.sqlite', // SQLite database storage
});

const Users = sequelize.define('Users', {
  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,

  },
  user_name: {
    type: Sequelize.STRING,
  },
  xp: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
});

Reflect.defineProperty(Users, 'add', {
  value: async function add(id, userName, amount) {
    const user = await Users.findOne({ where: { user_id: id } });

    if (user) {
      user.xp += Number(amount);
      return user.save();
    }

    const newUser = await Users.create({ user_id: id, user_name: userName, xp: amount });
    return newUser;
  },
});

Reflect.defineProperty(Users, 'getxp', {
  value: function getxp(id) {
    const user = Users.findOne({ where: { user_id: id } });
    return user ? user.xp : 0;
  },
});

storedxp =[];
//function  get() {
//      const rawValue = this.getDataValue();
//      return rawValue //? rawValue.toUpperCase() : null;
//    }
client.once('ready', async () => {
//	await
	sequelize.sync()
//    .then(async () => {
//	const Users = Xp.user_id
	const storedxp = await Users.findAll();
//	const user = Users.findOne({ where: { user_id: id } });
	const u = Users//.getDataValues('user_id')
//	const u = Users//.dataValues.user_id
//	console.log(user);
//	console.log(`${storedxp[0].Users}`)//.Users)//.dataValues)
 	storedxp.forEach(xp => u.setUser(xp.user_id, xp));//storedxp.forEach((b) => xp.set(b.user_id, b));
	console.log('Xp Database Synced and Online');
/*const user = function(obj, user_id) {
  return Users.create(obj, {returning: true}).then((storedxp) => {
    //console.log('inserted a fighter \n', fighterData);
    return Users.findOne({
      where: {
        user_id: id
     }
    }).then((userData) => {
      //console.log('fighterData in findOne promise \n', fighterData)
      return storedxp.setUser(userData)
//	console.log(userData)
*/

     
//    })
//    .catch((error) => {
  //    console.error('Error syncing the database:', error);
//    });
});
txp=[0]
//txp[0] = 0;
client.on('messageCreate', async (message) => {
if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  const msg = message;
  console.log(message.content);
  let user = await Users.findOne({ where: { user_id: message.author.id } });
//console.log(user)
  if (!user) {
    user = await Users.create({ user_id: message.author.id, user_name: message.author.username });
  }
add(message.author.id, 1);
  let xp = user.xp;
console.log(xp)
  xp ++
  user.xp = xp
   txp = xp
 
//  xp.save();
console.log(xp,txp)
//return xp
  let Nlevel = 1;
  let level = 5 * (Nlevel ^ 2) + 50 * Nlevel + 100 - xp
// * (lvl ^ 2) + 50 * lvl + 100 - xp;
  
console.log(level)
//  if (Nlevel <= level) {
if (xp >= level){
    message.channel.send(`🆙 | ${message.author} You've leveled up to \`${Nlevel + 1}\``);
    // Here you can add logic for handling level-up events
  }

  if (commandName === 'xp') {
    let target = message.mentions.users.first() || message.author;
console.log(target)
    const userData = await Users.findOne({ where: { user_id: target.id } });
console.log(userData)
    if (userData) {
      return message.channel.send(`${target.tag} has ${userData.xp}💰`);
    }
  }
});

client.login(token.Token);