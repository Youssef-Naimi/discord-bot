module.exports = {
    name: 'leave',
    description: 'this is a music command',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('You need to be in a voice channel first');
        await voiceChannel.leave();
        await message.channel.send('leaving channel :sad:')
    }
}