// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

// When the client is ready, this code runs(only once)
// Use 'c' for the event parameter to keep it seperate from the already defined 'client'
client.once(Events.ClientReady, c => {
    console.log(`Read! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your clients token
client.login(token);