const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Un pò di info su di me")
        .setAuthor("Nome del bot quii!!")
        .setColor('nome del colore qui!')
        .setFooter("Nome del bot quii!!")
        .addFields(
            { name: 'Creatore:', value: 'nome del creatore qui!!', inline: true},
            { name: 'Linguaggio di progammazione:', value: 'JavaScript', inline: true},
            { name: 'Scopo di questo bot:', value: 'bot vagabondo🤷‍♂️'}
        )
        .setTimestamp()


    message.channel.send(embed)
}

module.exports.config = {
    name: "info",
    description: "",
    usage: "!info",
    accessableby: "Members",
    aliases: []
}