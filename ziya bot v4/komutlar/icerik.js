const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(`Roblox - Yusuf Ziya`)
.setDescription(`


Güncelleme ile ne geldi?

!8ball komutuna yeni cevaplar eklendi   


`)

.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['icerik'], 
  permLevel: 0
};

exports.help = {
  name: "içerik",
  description: 'Komutlar hakkında bilgi gösterir veya sistemler hakkında yardım gösterir.',
  usage: 'f!yardım'
};