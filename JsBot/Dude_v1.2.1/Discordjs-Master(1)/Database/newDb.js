const Sequelize = require('sequelize');
const Token = require('../config.json')
const Discord = require('discord.js')
const client = new Discord.Client();
const PREFIX = '!';

const sequelize = new Sequelize('database', 'user', 'password', {
	host:		'localhost',
	dialect:	'sqlite',
	logging: 	false,
	// SQLite only
	storage: 	'databaseXP.sqlite',
});

const Xp = sequelize.define('users', {//Xp is currency and xp is balance
	//sequelize.define('users', {
		user_id: {
			            type: sequelize.DataTypes.STRING,
			            primaryKey: true,
		         },
		xp: {
                        type: sequelize.DataTypes.INTEGER,
                        defaultValue: 0,
                        allowNull: false,
                 },
	}, /*{
		                timestamps: false,
	}*/);


	Reflect.defineProperty(Xp, 'add', {
		/* eslint-disable-next-line func-name-matching */
		value: async function add(id, amount) {
			const user = Xp.get(id);
			if (user) {
				user.xp += Number(amount);
				return user.save();
			}
			const newUser = await Users.create({ user_id: id, xp: amount });
			Xp.set(id, newUser);
			return newUser;
		},
	});


	Reflect.defineProperty(Xp, 'getxp', {
		/* eslint-disable-next-line func-name-matching */
		value: function getxp(id) {
			const user = Xp.get(id);
			return user ? user.xp : 0;
		},
	});


client.once('ready', async () => {
	const Users = Xp.user_id

	const storedxp = await Users.findAll();
	storedxp.forEach(xp => Xp.set(xp.user_id, xp));		
	// [gamma]
	Xp.sync();
	console.log('Xp Synced');
});

client.on('message', async message => {
    const msg = message;
	let lvl = 1;
	

	/*let xpAdd = Math.floor(Math.random() * 1) + 1; 
   if (timeoutxp.has(message.author.id)) return;
  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }*/

  //let curxp = xp[message.author.id].xp;
  let xp = Xp.user_id.xp;
  xp++;
  //let curlvl = xp[message.author.id].level;
  let level= 5 * (lvl ^ 2) + (50 * lvl) + 100 - xp;
  //let nxtLvl = xp[message.author.id].level * 500;
  let Nlevel = 1 ;
  //xp[message.author.id].xp =  curxp + xpAdd;
 // if(nxtLvl <= xp[message.author.id].xp){
    //xp[message.author.id].level = curlvl + 1;
   if(Nlevel <= level){ 
     message.channel.send(`\🆙 | ${message.author} You've leveled up to **\`${level + 1}\`**`)//.then(m => m.delete(7000));
	 return Xp.xp
  }
	if (command === '!xp') {
		// [epsilon]

		//const tagName = commandArgs;

		// equivalent to: SELECT * FROM tags WHERE name = 'tagName' LIMIT 1;
		const xp  = 
		await Xp.findOne({ where: 	{ name: user_id } });
		if (xp) {
			const target = message.mentions.users.first() || message.author;
			return message.channel.send(`${target.tag} has ${Xp.getxp(target.id)}💰`);

		}}
  /*fs.writeFile("./src/database/xp.json", JSON.stringify(xp, null, 2), (err) => {
    if (err) console.log(err)
  });
  timeoutxp.add(message.author.id);
setTimeout(() => timeoutxp.delete(message.author.id), 20000);
*/
	/*if (message.content.startsWith(PREFIX)) {
		const input = message.content.slice(PREFIX.length).trim().split(' ');
		const command = input.shift();
		const commandArgs = input.join(' ');
		//class Util {
			//static 
			//getLevel(xp, extra = false) {
			//let level = 0;
			  
			  //WHILE LOOP
			  while(xp >= Util.getLevelxp(level)) {
				xp -= Util.getLevelxp(level);
				level++
			  }
			  if(extra) return [level, xp];
			  else return level;
			  //}
		  
			
			//static 
			getLevelxp(level) {
			  return 5 * Math.pow(level, 2) + 50 * level + 100;
			}
			
			//static 
			getInfo(exp) {
			  let [level, remxp] = Util.getLevel(exp, true);
			  let levelxp = Util.getLevelxp(level);
			  
			  return { level, remxp, levelxp}
			}
			
			//static
			 addexp(message) {
			  let toadd = Math.floor(Math.random() * 3 + 3);
			  let oldxp = db.get(`xp_${message.author.id}_${message.guild.id}`)
			  let oldlvl = Util.getLevel(oldxp)
			  let newxp = oldxp = toadd;
			  let newlvl = Util.getLevel(newxp);
			  
			  
			  if(newlvl > oldlvl) 
			  message.channel.send(`${message.author}, You just reached level ${newlvl}`)
			  db.add(`xp_${message.author.id}_${message.guild.id}`, toadd)
			}
		//  }
        total_msg = msg.add(message.author.id, 1);
		Xp= 5 * (lvl ^ 2) + (50 * lvl) + 100 - xp

		/*if (command === 'addtag') {
			// [delta]
		} else if (command === 'tag') {
			// [epsilon]
		} else if (command === 'edittag') {
			// [zeta]
		} else if (command === 'taginfo') {
			// [theta]
		} else if (command === 'showtags') {
			// [lambda]
		} else if (command === 'removetag') {
			// [mu]
		}*/})
	
//});

client.login(Token);

/*
const db = require("quick.db")

class Util {
  static getLevel(xp, extra = false) {
  let level = 0;
    
    //WHILE LOOP
    while(xp >= Util.getLevelxp(level)) {
      xp -= Util.getLevelxp(level);
      level++
    }
    if(extra) return [level, xp];
    else return level;
    }

  
  static getLevelxp(level) {
    return 5 * Math.pow(level, 2) + 50 * level + 100;
  }
  
  static getInfo(exp) {
    let [level, remxp] = Util.getLevel(exp, true);
    let levelxp = Util.getLevelxp(level);
    
    return { level, remxp, levelxp}
  }
  
  static addexp(message) {
    let toadd = Math.floor(Math.random() * 3 + 3);
    let oldxp = db.get(`xp_${message.author.id}_${message.guild.id}`)
    let oldlvl = Util.getLevel(oldxp)
    let newxp = oldxp = toadd;
    let newlvl = Util.getLevel(newxp);
    
    
    if(newlvl > oldlvl) 
    message.channel.send(`${message.author}, You just reached level ${newlvl}`)
    db.add(`xp_${message.author.id}_${message.guild.id}`, toadd)
  }
}

module.exports = Util;*/

/* THE PROBLEM IS LYING THAT IT IS NOT ABLE TO FIND STRING OF USERNAME... NOW EITHER I WILL HAVE TO INCLUDE THEM INTO 
	ORIGINAL USERS FILE... SO AS TO MAKE IT COMPATIBLE WITH CURRENCY WITH ANOTHER VALUE FOR XP...
	HENCE THE PROBLEM THAT WAS GETTING SOLVED BY ONLY USING ONE JS FILE... IS NOW DIMISHING...UNLESS WE PUT ALL THE 
	MEMBERS...PEOPLE WHO ARE USING OUR COMMANDS...THOSE WHO WONT USE OUR COMMANDS WONT REACH ANYWHERE
*/