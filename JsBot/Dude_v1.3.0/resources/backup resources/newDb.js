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
			            type: sequelize.STRING,
			            primaryKey: true,
		         },
		xp: {
                        type: Sequelize.INTEGER,
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
//const Users = Xp.user_id
//const U= Xp.get(id)
//const N = Xp.get(userName)
//await Users.sync();
//console.log('U=',Users,'UX=', Users.Xp,'Ux=', Users.xp, 'X=',Xp.user_id )
//console.log(`'U=',${Users},'X=',${Xp.user_id}, ${U}, ${N}, User.user`)//,'UX=', ${Users.Xp},'Ux=', ${Users.xp}, `)
//await Xp.sync()
//const storedxp = await Xp.findAll()//Users.findAll();
//storedxp.forEach(b => xp.set(b.user_id, b));
//Xp.sync();
	const Users = Xp.user_id

	const storedxp = await Users.findAll();
	storedxp.forEach(xp => Xp.set(xp.user_id, xp));		
	// [gamma]
	Xp.sync();
	console.log('Xp Synced');
/*
WORKING NOW
sequelize.sync()
  .then(async () => {

const storedxp = await Users.findAll();//  const userToUpdate = await Xp.findOne({ where: { user_id: 'someUserId' } });

//if (storedxp){				//    if (userToUpdate) {
storedxp.forEach(b => xp.set(b.user_id, b));//userToUpdate.someField = 'new value';
//await storedxp.save();      		//await userToUpdate.save(); // Save the changes to this specific record
//    }

console.log('Xp Database Synced and Online');
console.log(storedxp);
  })
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });


});

*/



/*
client.once('ready', async () => {
	const Users = Xp.user_id
//console.log(Users)
	const Authors = Xp.user_name
//console.log(Authors)
	sequelize.sync().then(() => {
	const storedxp = /*await/// Users.findAll();
	storedxp.forEach(xp => Xp.set(xp.user_id,xp.user_name, xp));		
	// [gamma]
//console.log(storedxp)
})
	Xp.sync();
	console.log('Xp Synced and Online');
});

const xp = new Collection();

client.once('ready', async () => {
	// Define the Sequelize model for Users
	const Users = client.sequelize.define('Users', {
    // Define the model properties here
    // Example:
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other properties as needed
  });

  // Synchronize the model with the database
  await Users.sync();
	const storedxp = await Users.findAll();
	storedxp.forEach(b => xp.set(b.user_id, b));
	console.log('Xp Database Synced and Online');
});
*/
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

client.login(token.Token);

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