const Discord = require('discord.js');
const {  token } = require('./config.json');
const client = new Discord.Client();
//const MessageEmbed= new Discord.MessageEmbed();

const puppeteer = require('puppeteer');
client.on('message',async message =>{
    //console.log('im ready');
if (message.content === 'pup'/* && message.content.startsWith(prefix)*/){
    const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
    const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const MODALBUTTONSELECTOR = '.modal-footer > button';
  await page.goto('https://native-land.ca/');
  await page.click(MODALBUTTONSELECTOR);
  await page.screenshot({ path: 'example.png' });

  

      //message.channel.send(MessageEmbed(page.screenshot));
     //await message.channel.send(page.screenshot());
     const embed = new Discord.MessageEmbed()
    .setColor('#EFFF00')
    .setTitle('this pic')
    .setImage(`${page.screenshot}`)
    .addFields(
		{ name: 'Links', value: trim(page.screenshot, 1024) },
		
		)
	
     message.channel.send(embed);
     
     await browser.close();
    
    //try catch(error);
  }
if (message.content === 'google'/* && message.content.startsWith(prefix)*/){
const Nightmare = require('nightmare')
const nightmare = Nightmare()

nightmare
	.goto('https://www.google.com/')
	.type("input[title='Search']", `${message}`)
	.click("input[value='Google Search']")
	.wait('#rso > div:nth-child(1) > div > div > div.r > a')
	.evaluate(
		() =>
			// eslint-disable-next-line no-undef
			document.querySelector(
				'#rso > div:nth-child(1) > div > div > div.r > a'
			).href
	)
    .end()
    .then((link) => {
	
    const embed = new Discord.MessageEmbed()
    .setColor('#EFFF00')
    .setTitle('this link')
    
.setDescription( `${message}: ${link}`)
    
    message.channel.send(embed)})


    //.catch((error) => {
	//	console.error('Search failed:', error)

}
if(message.content==='news'){
    /*const embed = new Discord.MessageEmbed()
.setTitle('this link')
.setDescription('screenshot.png')
.setThumbnail('./attach/Joker.jpg')
//.setImage({files:["screenshot.png"]})*/

const puppeteer = require('puppeteer')

// eslint-disable-next-line no-inner-declarations
async function getVisual() {
	try {
		const URL = 'https://edition.cnn.com';
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

        await page.goto(URL);
        await page.waitFor(500);
       // page.waitFor('3000ms')
        await page.screenshot({ path: 'screenshot.png' });
        //await page.screenshot(message.channel.send('screenshot.png'));
        await page.waitFor(500);
        await page.pdf({ path: 'page.pdf' });
        await message.channel.send({files:["screenshot.png"]});
        await message.channel.send({files:["page.pdf"]});

		await browser.close()
	} catch (error) {
		console.error(error)
	}
}

getVisual()


/*const { JSDOM } = require('jsdom')
const { document } = new JSDOM(
	'<h2 class="title">Hello world</h2>'
).window
const heading = document.querySelector('.title')
heading.textContent = 'Hello there!'
heading.classList.add('welcome')

heading.innerHTML
// <h2 class="title welcome">Hello there!</h2> */



/*
const { JSDOM } = require("jsdom")
const axios = require('axios')

const upvoteFirstPost = async () => {
  try {
    const { data } = await axios.get("https://old.reddit.com/r/programming/");
    const dom = new JSDOM(data, {
      runScripts: "dangerously",
      resources: "usable"
    });
    const { document } = dom.window;
    const firstPost = document.querySelector("div > div.midcol > div.arrow");
    firstPost.click();
    const isUpvoted = firstPost.classList.contains("upmod");
    const msg = isUpvoted
      ? "Post has been upvoted successfully!"
      : "The post has not been upvoted!";

    return msg;
  } catch (error) {
    throw error;
  }
};

upvoteFirstPost().then(msg => console.log(msg));

*/




}







/*if(message.content==='yah')
{
const puppeteer = require('puppeteer')

// eslint-disable-next-line no-inner-declarations
async function getVisual() {
try {
	const URL = 'https://www.reddit.com/r/programming/'
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto(URL)
	await page.screenshot({ path: 'screenshot.png' })
    await page.pdf({ path: 'page.pdf' })
    /*await page.setContent(URL)
    const element = await page.$("body")
    const buffer = await element.screenshot({
        path: "./tmp.png",
        omitBackground: false,
        //...screeshotArgs
    });
    
    await message.channel.send(getVisual(buffer))
    
//var a = page.screenshot({ path: 'screenshot.png' });
//var b = getVisual();
*/
/*const embed = Discord.MessageEmbed()
.setTitle()
.setDescription('./screenshot.png')
//.setImage(getVisual('./screenshot.png'))
.setImage()
message.channel.send(embed)


await page.close();
    await browser.close()
    
    message.channel.send(embed(getVisual()))
	} catch (error) {
        console.error(error)
        
	}
    
}
getVisual();
*/

//}})







})

client.login(token);