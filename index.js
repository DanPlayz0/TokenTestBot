const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => console.log(`${client.user.username}${client.user.discriminator}`, client.user.id));
client.login();