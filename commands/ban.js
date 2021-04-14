const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
        var utenteBan = message.mentions.members.first();

        if (!message.member.hasPermission("BAN_MEMBERS")) {
            message.reply('Non hai il permesso per eseguire questo comando!');
            return;
        }

        if (!utenteBan) {
            message.reply('Non hai menzionato nessun utente');
            return;
        }

        if (!utenteBan.kickable) {
            message.reply('Non ho il permesso per eseguire questo comando');
            return
        }

        utenteBan.ban()
            .then(() => message.channel.send("<@" + utenteBan + ">" + " è stato bannato"))
}

module.exports.config = {
    name: "ban",
    description: "Bans a Users",
    usage: "!ban",
    accessableby: "Admins",
    aliases: []
}