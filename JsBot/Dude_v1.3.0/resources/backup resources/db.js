const {Sequelize, DataTypes, Model } = require('sequelize');
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

const sequelize = new Sequelize('database', 'user', 'password', {
	host:		'localhost',
	dialect:	'sqlite',
	logging: 	false,//'logger.debug.bind(logger)',
	// SQLite only
	storage: 	'databaseNew.sqlite',
});

/*
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
defaultValue: "John",
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
	defaultValue: "Doe",
    // allowNull defaults to true
  },
 
  UID: {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
},
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); 
User.sync();
*/
/*
class New extends Model {
	getFullname() {
	return [this.firstname, this.lastname].join(' ');
  }
}
New.sync();
New.init({
  firstname: Sequelize.TEXT,
  lastname: Sequelize.TEXT
}, { sequelize });

const user = New.build({ firstname: 'Jane', lastname: 'Doe' });
console.log(user.getFullname());
//await 
user.save();
console.log('Jane was saved to the database!', user.getFullname());
*/
/*
const User = sequelize.define("User", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});
sequelize.sync()
/*
class New extends Model{
increment(){
return [this.age++,this.cash++];
}
}*
function increment(){
return [this.age++,this.cash++];
}
const user =  User.create({ name: "Jane", age: 100, cash: 5000 });
user.increment({
  'age': 2,
  'cash': 100
});
user.sync()
user.save()
console.log(user.age,user.name, user.name())
console.log(user.toJSON()); // This is good!
//console.log(JSON.stringify(jane, null, 4)); // This is also good!
*/
const User = sequelize.define('User', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
});

// Create a user instance
sequelize.sync()
  .then(async () => {
    // Database is now synchronized
//    const user = await User.create({ name: "Jane", age: 100, cash: 5000 });
//    console.log(user.age, user.name, user.cash);
/*user.increment({
  'age': 2,
  'cash': 100
  });
*/
//    user.age += 0;
//    user.cash += 10;
//    await user.save();
//  console.log(user.age, user.name,user.cash);
//  console.log(user.toJSON());
//  console.log(JSON.stringify(user, null, 4))


//  const users = await User.findAll();
//  console.log("All users:", JSON.stringify(users, null, 2));
  
/*User.findAll({
  attributes: [
    'id',
    [sequelize.fn('COUNT', sequelize.col('name')), 'user_name'],
    
  ]
});*/
//console.log(user.toJSON());

const [user, created] = await User.findOrCreate({
  where: { name: 'Han' },
  defaults: {
    age: 18
  }
});
console.log(user.name); // 'sdepold'
console.log(user.age); // This may or may not be 'Technical Lead JavaScript'
console.log(created); // The boolean indicating whether this instance was just created
if (created) {
  console.log(user.age); // This will certainly be 'Technical Lead JavaScript'
}

})
  .catch((error) => {
    console.error('Error syncing the database:', error);
  });
//console.log(user.age, user.name);

//sequelize.sync()
/*user.increment({
  age: 2,
  cash: 100
});*/
//, user.name())
//console.log(user.toJSON());


/*
class User extends Model{
f;
}

User.init({
id:{
type:DataTypes.INTEGER,
autoIncrement: true,
primaryKey: true}
}, {sequelize});

const user =new User({id:1});
console.log(user.id)

User.sync();

sequelize.define('User', { name: DataTypes.STRING });



*/

/*GET
const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    get() {
      const rawValue = this.getDataValue('username');
      return rawValue ? rawValue.toUpperCase() : null;
    }
  }
});
const user = User.build({ username: 'SuperUser123' });
console.log(user.username); // 'SUPERUSER123'
console.log(user.getDataValue('username'));
*/
