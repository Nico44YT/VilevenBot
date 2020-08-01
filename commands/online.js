const { version } = require("discord.js");

module.exports = {
    name: 'online',
    description: 'Online Command',
    execute(message, args){
            message.channel.bulkDelete(1);
            message.channel.send(`**Online with version : ${version} :cat:**`).then(message => message.delete({timeout: 2000}))
    }
}