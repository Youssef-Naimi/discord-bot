module.exports = {
    name : 'unmute',
    description : 'this will unmute the mentioned member',
    execute(message, args){
        const member = message.mentions.users.first();
        if (member){
            let MainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let MuteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            const memberTarget = message.guild.members.cache.get(member.id);

            memberTarget.roles.remove(MuteRole.id);
            memberTarget.roles.add(MainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> hdr`);
        } else {
            message.channel.send('xkun hada???????')
        }
    }
}