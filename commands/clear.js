const Discord = require('discord.js');

module.exports.run = async (bot, message) => {
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Non hai il permesso per eseguire questo comando!");

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply("perfavore metti un numero dopo il comando")}

    if (parseInt(args[0]) > 100) {
        message.reply("Non puoi cancellare 100 messaggi tutt'una volta!")
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
}

module.exports.config = {
    name: "clear",
    usage: "!clear",
    aliases: []
}