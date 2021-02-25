const Discord = require('discord.js');

exports.run = async(client, message) => {//Fyer Code

    const rules = new Discord.MessageEmbed()
    
      .setColor('RED')//Fyer Code
      .addField(`Kurallar`, [`
      
      - Küfür, argo ve reklam kesinlikle **yasaktır**!
      - Spam ve flood **yasaktır**!
      - Din, ırk ve siyaset konuşmak **yasaktır**!
      - Herkes birbirine saygılı olmalıdır!
      - Herkesin görüşü kendinedir bu yüzden tartışmak **yasaktır**!
      - Üstünlük göstermek/taslamak **yasaktır**!
      - Caps ve emoji kullanımı **yasaktır**! (Aşırı Olmadıkça)
      - Oynuyor kısmına reklam, küfür koymak **yasaktır**!
      - Yetkililere karşı gelmek **yasaktır**!
      - Bot basmak/j4j yapmak **yasaktır**!
      - Rahatsızlık vermek **yasaktır**! \n\n
      - SUNUCUYA GİRDİĞİNİZ ANDA OKUMUŞ SAYILACAKSINIZ!

      `])

       message.delete();
       

    return message.channel.send(rules).then(keleS => keleS.react("?"));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rules'],//Fyer Code
    permLevel: 0
}

exports.help = {
    name : 'kurallar',
    description: 'Hazır kuralları kanalınıza atar.',
    usage: 'kurallar/rules'
}//Fyer Code