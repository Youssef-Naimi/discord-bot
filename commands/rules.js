module.exports = {
    name: 'rules',
    description:"this is a ping command!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#7fe5f0')
        .setTitle('rules')
        .setDescription('this is an embed for server rules')
        .addFields(
            {name:'Rule 1', value:'Dont be Motmain'},
            {name:'Rule 2', value:'no other rules'}
        )
        .setImage('https://media1.tenor.com/images/1f72b04f5121bfc9991be5831f263c31/tenor.gif?itemid=18331160')
        .setFooter('make sure to follow the rules');

        message.channel.send(newEmbed);
    }
}