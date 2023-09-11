/*const fetch = require('node-fetch');
require('discord.js');

module.exports= {
    name: '!urban',
    description : ' API Commands',
    execute(message, args) {*/
    /*if (message.content.startsWith('!a')){
		if (command === 'cat') 	{
fetch('https://aws.random.cat/meow').then(response => response.json());
if (message.content === 'cat') {
	const { file } =  fetch('https://aws.random.cat/meow').then(response => response.json());

	message.channel.send(file);
}
		}


const querystring = require('querystring');
*//*
if (message.content.startsWith('!urban')) {
  if (!args.length) {
    return message.channel.send('You need to supply a search term!');
  }

	const query = querystring.stringify({ term: args.join(' ') });

  const { list } =  fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
}

if (!list.length) {
	return message.channel.send(`No results found for **${args.join(' ')}**.`);
}

message.channel.send(list[0].definition);

const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
const [answer] = list;

const embed = new MessageEmbed()
	.setColor('#EFFF00')
	.setTitle(answer.word)
	.setURL(answer.permalink)
	.addFields(
		{ name: 'Definition', value: trim(answer.definition, 1024) },
		{ name: 'Example', value: trim(answer.example, 1024) },
		{ name: 'Rating', value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.` },
	);

message.channel.send(embed);


var unirest = require("unirest");

var req = unirest("GET", "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D");

req.headers({
	"x-rapidapi-key": "SIGN-UP-FOR-KEY",
	"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
}
}
*/