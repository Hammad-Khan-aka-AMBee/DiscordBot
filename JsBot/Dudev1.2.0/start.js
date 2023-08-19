/* 

   — An adorable Discord bot.           <3                                    */

// ██████ Integrations █████████████████████████████████████████████████████████

const Dude = require("./Structures/Dude.js");
const Tags = require('./resources/DudeTag');
const Currency = require('./resources/Currency')
const Punishment = require('./resources/Punishment')
const Intro = require('./resources/Introduction')
//const Embeds = require('./resources/Embeds')

//console.log(Dude, p3);


// ██████ Initialization ███████████████████████████████████████████████████████

process.on("rejectionHandled", (err) => {
    console.error(err);
});

process.on("unhandledRejection", (err) => {
    console.error(err);
});

process.on("uncaughtException", (err) => {
    console.error(err);
});
