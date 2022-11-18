module.exports = {
    name: 'help',
    description:"this is a help command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7fe5f0')
        .setTitle('help')
        .setDescription('Command List')
        .addFields(
            {name:'3afak play \"song name\"', value:'plays music'},
            {name:'3afak leave', value:'stops music and exit voice channel'},
            {name:'3afak clear \"amount\"', value: 'delete selected amount of messages'},
            {name: '3afak kick \"mentioned user\"', value: 'kicks mentioned user'},
            {name: '3afak ban \"mentioned user\"', value: 'bans mentioned user'},
            {name: '3afak rules', value: 'shows server rules'},
            {name: '3afak mute \"mentioned user\"', value: 'mutes mentioned user'},
            {name: '3afak unmute \"mentioned user\"', value: 'unmutes mentioned user'},
            {name: '3afak howgay \"mentioned user\"', value: 'tells you howgay is the mentionned user'},
            {name: '3afak imagine \"a description of what to imagine\"', value:"generates an AI image with the given description"}
        )
        .setImage('https://media1.tenor.com/images/8526e61dbe9f09f82149d6b5cf1350c5/tenor.gif?itemid=12678320')
        .setFooter('make sure to follow the rules');

        message.channel.send(newEmbed);
    }
}