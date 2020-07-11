


const Discord = require('discord.js');
const bot = new Discord.Client();

var description,dob,character,slang

const token = process.env.key

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

const PREFIX = '-';

  bot.on('message' , message=>{
    function getUserFromMention(mention) {
        if (!mention) return;
    
        if (mention.startsWith('<@') && mention.endsWith('>')) {
            mention = mention.slice(2, -1);
    
            if (mention.startsWith('!')) {
                mention = mention.slice(1);
            }
    
            return bot.users.cache.get(mention);
        }
    }

    let args = message.content.substring(PREFIX.length).split(" ");
    
    
    switch(args[0]){
       
       
        case 'hi':
       message.channel.send("hi");
       break;

       case 'profile':
        if(typeof(args[1])=='undefined' || args[1]==null || typeof(getUserFromMention(args[1]))=='undefined'){
            message.channel.send("mention someone from adults");
           return
        }

        const user = getUserFromMention(args[1]);
     
        var name = user.username;

        

        switch(name){
        case 'splinter1080':
            description="Guitarist in the making"
            dob="6/04/2001"
            character="stoned bastard"
            slang='hag diya be '
       break;
       case 'shuxton':
         description="He doesn't discriminate between men and women"
            dob="22/03/2001"
            character="Shameless"
            slang='fucker'
           break;
        case 'anshika kaul':
            description="Professional hair puller"
            dob="19/08/2001"
            character="Rowdy"
            slang='chal hatt'
        break;
        case 'Anuja':
          description="Still looking for someone shorter than her"
            dob="16/04/2001"
            character="Divider"
            slang='is it so?'
        break;
        case 'chill Kinda guy':
          description="Still looking for someone taller than him"
          dob="18/08/2001"
          character="Sed TikToker"
          slang='sike maga'
        break;
        case 'kp':
          description="Singer sang away a girl"
          dob="13/02/2001"
          character="Ask ECE"
          slang='howdaa?'
        break;
        case 'likhith':
          description="A guy who got rejected at MG Road"
          dob="12/08/2001"
          character="An unknown mystery..."
          slang='supreet is cute'
        break;
        case 'Raj Vir Singh':
          description="The only contemporary dancer of the group"
          dob="28/12/2001"
          character="punjabi"
          slang='Bhai homework kar liya?'
        break;
        case 'raj_kumar_rai':
          description="We dare you to defeat him in a speaking contest"
          dob="22/01/2001"
          character="Wannabe jack of all trades"
          slang='bhai tujhe pata hai/Gandu'
        break;
        case 'SlowAndBad':
          description="Winnie The Pooh"
          dob="15/03/2001"
          character="Heartbroken"
          slang='neenu nan friend antha bidthi dini'
        break;
        case 'uzumaki_dash':
          description="His life is as good as his PJs"
          dob="04/02/2002"
          character="Nerdy"
          slang='sike maga'
        break;
        case 'vish_ckmkb':
          description="Kabhi kabhi dikhti hai"
          dob="11/11/2001"
          character="ISE>>>>CSE"
          slang=':joy: :joy: :joy: :joy: :joy:'
        break;
        case 'nischal':
          description="The ideal kid."
          dob="23/12/2001"
          character="Perfect"
          slang='NA(he doesnt use slang)'
        break;
        case 'velvet_thunder':
          description="A guy wearing blue headphones and a hoodie "
          dob="25/09/2000"
          character="Lazy"
          slang='maams/bhaisaahab'
        break;


 


        default:
          message.channel.send("I see a typo!");
          return;



        }
        
      
        var dp = user.displayAvatarURL()
        var title = "Adults Aadhar"
        
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle(title)
        .setURL('https://discord.js.org/')
        .setAuthor(name)
        .setDescription(description)
        .setThumbnail(""+dp)
        .addFields(
            { name: "Cake Day\n(50 Rs nikal)", value: dob },
            { name: '\u200B', value: '\u200B' },
            { name: 'Common Slang', value: slang, inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Character', value: character, inline: true },
        )
        .setTimestamp()
        message.channel.send(exampleEmbed);
       break;
   
  

    
}  

  })


bot.login(token);
