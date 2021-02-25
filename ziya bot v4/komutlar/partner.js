const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(`Fyer Bot Partnerler ve Dostlar Menüsü`)
.setDescription(`


Botu yapmaya başladığım günden beri bana destek olan Roblox - Yusuf Ziya nın sunucusuna gitmek içi [Buraya](https://discord.gg/6sEKJTtBwj) Tıklayabilirsiniz

J E S S U E Ercik medeniyetine gitmek için [Buraya](https://discord.gg/y4KhuqCaKv) Tıklayabilirsiniz

Fyer Code Development sunucusuna ulaşmak için [Buraya](https://discord.gg/JjjYvwq8AR) Tıklayabilirsiniz

`)
.setImage('https://cdn.discordapp.com/attachments/780347851804901407/807989475551477790/standard_13.gif')
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: "partner",
  description: 'Bilgileri verir',
  usage: 'f!partner'
};