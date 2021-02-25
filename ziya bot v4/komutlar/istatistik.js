const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(`Roblox - Yusuf Ziya`)
.setDescription(`


**------------------------------------------**
**|**
**|> Şu anda Roblox - Yusuf Ziya sunucusunda ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} üye var**
**|**
**|> ${ayarlar.prefix} Prefixim**
**|**
**------------------------------------------**


`)
.setImage('https://cdn.discordapp.com/attachments/780347851804901407/807989475551477790/standard_3.gif')
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: 'Bilgileri verir',
  usage: 'f!istatistik'
};