const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Comandi da usare ")
        .setAuthor("nome del bot qui!")
        .setColor('colore qui!')
        .setFooter("nome del bot qui!")
        .addFields(
            { name: '```!clear```', value: '*per cancellare messaggi*'},
            { name: '```!meme```', value: '*per vedere bei meme direttamente Reddit*'},
            { name: '```!kick```', value: '*per kickare membri*'},
            { name: '```!ban```', value: '*per bannare membri*'},
            { name: '```!mute/unmute```', value: '*per mutare/smutare membri*'},
            { name: '```!tempmute```', value: '*per mutare un membro per un tot. di tempo*'},
            { name: '```!poll```', value: '*per creare sondaggi*'},
            { name: '```!info```', value: '*per vedere le info su di me*'},
            { name: '```!memberinfo```', value: '*per vedere le info su un membro preciso*'},
        )
        .setTimestamp()


    message.channel.send(embed)
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "!help",
    accessableby: "Members",
    aliases: []
}