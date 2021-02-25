const Discord = require('discord.js');

exports.run = (client, message, args) => {//Fyer Code
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
});//Fyer Code
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};//Fyer Code

exports.help = {
    name: 'nuke',
  description: 'Better antispamdaki nuke komutu işte',
  usage: 'nuke'
};