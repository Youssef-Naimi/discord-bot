//pterodactyl password: c04ebf199d95
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '3afak '

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('My BOT is online !');
    client.user.setPresence({
        status: "idle", 
        activity:{
            name:'3afak help',
            type:'PLAYING'
        }
    });
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    } else if(command == 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command == 'play'){
        client.commands.get('play').execute(message, args);
    } else if(command == 'leave'){
        client.commands.get('leave').execute(message, args);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if(message.content.startsWith(prefix + "howgay")) {
        message.channel.send("***" + Math.floor(Math.random() * 100 + 1) + " % gay   :rainbow_flag:***")
    } else if (command == 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if (command == 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command == 'imagine') {
        client.commands.get('imagine').execute(message, args, Discord)
    }
});

client.login('ODU2NjQ1OTY2MTg3MDY5NDUx.YNEDug.Swun1l0Les4nRbwKGnTcRTD1t3Q');
