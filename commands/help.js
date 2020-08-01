const { MessageEmbed,Client,Collection } = require("discord.js");
var commands = 'online';
var admincommands = 'play';

module.exports = {
    name: 'help',
    description: 'Help Command',
    execute(message, args){
        message.channel.bulkDelete(1);
        const embed = new MessageEmbed();
        embed.setTitle("Kryptic bot help");
        embed.setColor("RED");
        embed.addField("Commands",commands);
        embed.addField("Admincommands",admincommands);
        embed.setThumbnail(message.guild.iconURL());
        message.channel.send(embed).then(message => message.delete({timeout: 5000}));
    }
}