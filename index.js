const Discord = require('discord.js');
const bot = new Discord.Client();

const token = '//insert_the_token';
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

const PREFIX = '!';

bot.on('message' , msg=>{
  if(msg.content == 'HELLO' ){
    msg.reply('Kaisa hai bc sab badhiya?') ;
  }
  else if(msg.content == 'sab badhiya bhosdike'){
    msg.reply('get a life chutiye , apne bot se kya baat kr rha hai!')
  }
})

bot.on('message' , message=>{
  
  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
     case 'embed':
     const embed = new Discord.MessageEmbed()
     //.setTitle('Player Kundli')
     .addField('Player Name',message.author.username)
     .setColor(0x1CCFF3)
     .addField('Current Server', message.guild.name)
     .setThumbnail(message.author.displayAvatarURL())
     message.channel.send(embed);
     break;
  }
     
})

bot.login(token);
