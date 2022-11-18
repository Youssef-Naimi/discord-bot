module.exports = {
    name: 'ban',
    description:"this is a ban command!",
    execute(messages, args){
        const member = messages.mentions.users.first();
        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id);
            memberTarget.ban();
            messages.channel.send("safi tbanna");
        }else{
            messages.channel.send('you can\'t ban')
        }
    }
}