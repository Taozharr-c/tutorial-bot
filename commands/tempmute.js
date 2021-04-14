const Discord = require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if(message.member.hasPermission('MANAGE_MESSAGES')) {
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.reply('Scrivi un membro da mutare!')

        let mainrole = message.guild.roles.cache.find(role => role.name === "inserire nome qui!");
        let role = message.guild.roles.cache.find(role => role.name === "inserire nome qui!");

        if (!role) return message.reply("Non riesco a trovare il ruolo 'inserire nome qui!'.")

        let time = args[1];
        if (!time) {
            return message.reply("Non hai specificato il tempo!");
        }

        member.roles.remove(mainrole.id)
        member.roles.add(role.id);

        message.channel.send(`@${member.user.tag} è stato mutato per ${ms(ms(time))}`)

        setTimeout( function () {
            member.roles.add(mainrole.id)
            member.roles.remove(role.id);
            message.channel.send(`@${member.user.tag} è stato smutato.`)
        }, ms(time));

    } else {
        return message.channel.send('Non hai il permesso per usare questo comando')
    }
}

module.exports.config = {
    name: "tempmute",
    description: "",
    usage: "!tempmute",
    accessableby: "Members",
    aliases: []
}