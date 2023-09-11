const fetch = require("node-fetch");
module.exports= {
    name: 'cat',
    description : ' fun command of a pic of neko',
    execute(message, args) {
async function Display()  {
if (message.content === '!cat') {
    const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
    //console.log({file})

    message.channel.send(file);
} 
    }
    Display();
}
}