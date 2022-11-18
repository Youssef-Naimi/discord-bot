const ms = require('ms');

module.exports = {
    name : 'mute',
    description : 'this will mute the mentioned member',
    execute(message, args){
        const member = message.mentions.users.first();
        if (member){
            let MainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let MuteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(member.id);

            if(!args[1]){
                memberTarget.roles.remove(MainRole.id);
                memberTarget.roles.add(MuteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> skt`);
                return
            }
            memberTarget.roles.remove(MuteRole.id);
            memberTarget.roles.add(MainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> skt`);

            setTimeout( function (){
                memberTarget.roles.remove(MainRole.id);
                memberTarget.roles.add(MuteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> skt ${ms(ms(args[1]))}`);
            }, ms(args[1]));
        } else {
            message.channel.send('xkun hada???????')
        }
    }
}