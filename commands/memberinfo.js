const Discord = require("discord.js")
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
    let userArray = message.content.split(" ");
    let userArgs = userArray.slice(1);
    let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

    if (member.presence.status === 'dnd') member.presence.status = 'Non disturbare';
    if (member.presence.satus === 'online') member.presence.status = 'Online';
    if (member.presence.status === 'idle') member.presence.status = 'Idle';
    if (member.presence.status === 'offline') member.presence.status = 'Offline';

    let x = Date.now() - member.createdAt;
    let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
    const joined = Math.floor(y / 86400000);

    const joineddate = moment.utc(member.jojnedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
    let status = member.presence.status;

    const userEmbed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTimestamp()
    .setColor('nome del colore qui!!')
    .setImage(member.user.displayAvatarURL())
    .addField('Ruolo/i', `<@&${member._roles.join('> <@&')}`)
    .addField("Account creato il:", ` ${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY   ")}`, true)
    .addField('Entrato nel server il:', `${joineddate} \n> ${joined} Giorno/i fa`)
    .addField("Stato", status)

    message.channel.send(userEmbed)
}

module.exports.config = {
    name: "memberinfo",
    description: "",
    usage: "!memberinfo",
    accessableby: "Members",
    aliases: ['userinfo']
  }