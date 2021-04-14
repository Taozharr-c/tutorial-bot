const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let pollChannel = message.mentions.channels.first()
    let pollDescription = args.slice(1).join(' ');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle(' Nuovo sondaggio in arrivoo! ')
    .setDescription(pollDescription)
    .setColor('nome colore qui!')
    let msgEmbed = await pollChannel.send(embedPoll)
    await msgEmbed.react('👍')
    await msgEmbed.react('👎')
}

module.exports.config = {
    name: "poll",
    description: "",
    usage: "!poll",
    accessableby: "Members",
    aliases: []
}