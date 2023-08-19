const mfile = require('../../resources/Assets/wmp.json')

module.exports= {
    name: 'wmp',
    description : ' fun command of interesting quotes about women empowerment ',
    execute(message, args) {
    if (message.content.startsWith('!wmp')){   
      async function Display()  {
      let user = message.mentions.users.first() //|| client.users.get(args[0]);
      
      if(!user) user = message.author;
      //let body = mfile
      
      try {
        let mAns = mfile[Math.floor(Math.random() * mfile.length)]
  
        message.channel.send(`👍 | **${message.author.username}**, ${mAns}`)
        
        
        //message.channel.send(`**${user.username}**, ${r}`)
      } catch (e) {
        message.channel.send(`Oh no an error occurred :( \`${e.message}\` try again later!`) 
      } 
        

    }Display()
  }
}
}