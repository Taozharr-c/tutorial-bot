const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if (message.content.startsWith("!kick")) {

        var utenteKick = message.mentions.members.first();

        if(!message.member.hasPermission("KICK_MEMBERS")){
            message.reply("Non hai il permesso per eseguire questo comando!");
            return;
        }

        if (!utenteKick) {
            message.reply("Non hai menzionato nessun utente");
            return;
        }

        if(!utenteKick.kickable) {
            message.reply("Non ho il permesso per eseguire questo comando");
            return;
        }

        utenteKick.kick()
            .then(() => message.channel.send("<@" + utenteKick +"> è stato kickato"))
    }
}

module.exports.config = {
    name: "kick",
    description: "Kicks a user",
    usage: "!kick",
    accessableby: "Admins",
    aliases: []
}   