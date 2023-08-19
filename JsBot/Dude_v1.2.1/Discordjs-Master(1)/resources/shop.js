const CurrencyShop = require('./models/CurrencyShop')
const Sequelize = require('sequelize');

sequelize.sync({ force }).then(async () => {
	const shop = [
        CurrencyShop.upsert({ name: 'Tea', cost: 1 }),
        CurrencyShop.upsert({ name: 'Coffee', cost: 2 }),
        CurrencyShop.upsert({ name: 'Cake', cost: 5 }),
    ];
	await Promise.all(shop);
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);

