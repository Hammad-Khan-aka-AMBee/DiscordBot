const mfile = require('../../resources/Assets/sq.json')

module.exports= {
    name: 'sq',
    description : ' fun command of interesting questions ',
    execute(message, args) {
    if (message.content.startsWith('!sq')){   
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