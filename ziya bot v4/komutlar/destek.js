const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(`Fyer Destek`)
.setDescription(`

Botta bir hatamı buldun? [Buraya](https://discord.gg/JjjYvwq8AR) tıklayarak destek sunucusuna gelebilirsin
     
      Botun VDS masraflarına destek olmak isterseniz [Buraya](https://www.patreon.com/fyerbot) tıklayarak patreon sayfasına erişebilirsin

`)
.setImage('https://cdn.discordapp.com/attachments/790621429342142501/800442677233320006/standard_11.gf')
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Komutlar hakkında bilgi gösterir veya sistemler hakkında yardım gösterir.',
  usage: 'f!yardım'
};