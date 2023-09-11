/* 

   — An adorable Discord bot.           <3                                    */

// ██████████████████████████████████████████████ Integrations █████████████████████████████████████████████████████████

//const Dude	= require("./Structures/Dude.js");
const Dude	= require("./dude.js");
//const Events	= require("./Events.js");
const Tags	= require('./resources/Tag.js');
const Currency	= require('./resources/Currency.js')
const Xp	= require('./resources/XP.js')
//const Report	= require('./resources/Punishment')
//const Intro	= require('./resources/Introduction')
//const Embeds	= require('./resources/Embeds')

//console.log(Dude, p3);


// ██████████████████████████████████████████████ Initialization ███████████████████████████████████████████████████████

process.on("rejectionHandled", (err) => {
    console.error(err);
});

process.on("unhandledRejection", (err) => {
    console.error(err);
});

process.on("uncaughtException", (err) => {
    console.error(err);
});
