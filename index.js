require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const TOKEN = process.env.TOKEN || null;

const intents = [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMembers, IntentsBitField.Flags.DirectMessages, IntentsBitField.Flags.GuildPresences];
const client = new Client({ intents: intents });

client.on('ready', () => console.log('The robot is ready!'));

client.on('messageCreate', function(msg) {
  if (msg.author.bot) return;

  if (msg.content.startsWith('ping')) {
    msg.reply('Pong!');
    msg.channel.send('Hello world!');
  }
});

if (TOKEN) client.login(TOKEN);
