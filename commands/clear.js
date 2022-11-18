module.exports = {
    name: 'clear',
    description:"this is a clear command!",
    async execute(message, args) {
        if(!args[0]) return message.reply("please enter amount");
        if(isNaN(args[0])) return message.reply("please use numbers");
        if(args[0] > 200) return message.reply("max limit 200");
        if(args[0] < 1) return message.reply("min limit 1");
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}