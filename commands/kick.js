module.exports = {
    name: 'kick',
    description:"this is a kick command!",
    execute(messages, args){
        const member = messages.mentions.users.first();
        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id);
            memberTarget.kick();
            messages.channel.send("safi tkicka");
        }else{
            messages.channel.send('you can\'t kick')
        }
    }
}