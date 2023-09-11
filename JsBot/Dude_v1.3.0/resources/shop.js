const CurrencyShop = require('./models/CurrencyShop')
const Sequelize = require('sequelize');

sequelize.sync({ force }).then(async () => {
	const combinedShop = [
    CurrencyShop.upsert({ name: 'Coffee ☕', cost: 20 }),
    CurrencyShop.upsert({ name: 'Tea 🍵', cost: 20 }),
    CurrencyShop.upsert({ name: 'Cake 🍰', cost: 50 }),
    CurrencyShop.upsert({ name: 'Beer 🍺', cost: 40}),
    CurrencyShop.upsert({ name: 'Wine 🍷', cost: 60 }),
    CurrencyShop.upsert({ name: 'Cocktail 🍹', cost: 80 }),
    CurrencyShop.upsert({ name: 'Love Letter 💌', cost: 50 }),
    CurrencyShop.upsert({ name: 'Heart Emoji <:ssaugiyuu_love:1125846362462896270>', cost: 50 }),
    CurrencyShop.upsert({ name: 'Rose 🌹', cost: 100 }),
    CurrencyShop.upsert({ name: "Cupid's Arrow 🏹", cost: 100 }),
    CurrencyShop.upsert({ name: 'Belt <:xBelt:1149341001048133672>', cost: 200 }),
    CurrencyShop.upsert({ name: 'Matching Outfits 👫', cost: 300 }),
    CurrencyShop.upsert({ name: 'Romantic Playlist Access 🎶', cost: 200 }),
    CurrencyShop.upsert({ name: 'Love Potion 💘', cost: 150 }),
    CurrencyShop.upsert({ name: 'Pat <:rrkannapat_:1072880214440423494>', cost: 150 }),
    CurrencyShop.upsert({ name: 'Virtual Hug 🤗', cost: 500 }),
];

	await Promise.all(shop);
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);

