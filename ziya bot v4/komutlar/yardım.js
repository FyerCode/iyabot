const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(`Roblox - Yusuf Ziya Yardım Menüsü`)
.setDescription(`


:white_small_square: **=**  \`${ayarlar.prefix}yardım\`:    **Bütün komutları gösterir**
:white_small_square: **=**  \`${ayarlar.prefix}embed\`:    **Özel gömme göndermenizi sağlar**
:white_small_square: **=**  \`${ayarlar.prefix}ban\`:    **İD veya etiket ile ban atarsınız**
:white_small_square: **=**  \`${ayarlar.prefix}kahve\`:    **Kahve içersiniz**
:white_small_square: **=**  \`${ayarlar.prefix}kick\`:    **Belirtlen kişiyi sunucudan yasaklarsınız**
:white_small_square: **=**  \`${ayarlar.prefix}fal\`:    **Fal bakarsınız**
:white_small_square: **=**  \`${ayarlar.prefix}nuke\`:    **Kanalı silip yeniden oluşturur**
:white_small_square: **=**  \`${ayarlar.prefix}isim\`:    **Belirtlen kişinin ismini düzenlersiniz**
:white_small_square: **=**  \`${ayarlar.prefix}kurallar\`:    **Hazır kuralları gönderir**
:white_small_square: **=**  \`${ayarlar.prefix}kaçcm\`:    **Ölçersiniz :D**
:white_small_square: **=**  \`${ayarlar.prefix}oylama\`:    **Sunucu içinde oylama yaparsınız**
:white_small_square: **=**  \`${ayarlar.prefix}efkarölç\`:    **Ne kadar efkarlısınız onu ölçersiniz**
:white_small_square: **=**  \`${ayarlar.prefix}rol-al\`:    **Belirtlen rolü Belirtlen kullanıcıdan alır**
:white_small_square: **=**  \`${ayarlar.prefix}rol-ver\`:    **Belirtlen rolü Belirtlen kişiye verirsiniz**
:white_small_square: **=**  \`${ayarlar.prefix}sil\`:    **Belirtlen sayıda mesajı silersiniz**
:white_small_square: **=**  \`${ayarlar.prefix}destek\`:    **Gereksiz bir menü açar**
:white_small_square: **=**  \`${ayarlar.prefix}icerik\`:    **Güncelleme notlarını gösterir**



`)
.setImage('https://cdn.discordapp.com/attachments/780347851804901407/807989475551477790/standard_13.g')
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