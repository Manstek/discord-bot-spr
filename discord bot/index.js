const {Client, Intents}=require("discord.js");
const { token } = require('./config.json');

const client=new Client({
    Intents:[
        Intents.FLAGS.GUILDS,//adds server functionality
        Intents.FLAGS.GUILD_MESSAGES //gets messages from our bot.
    ]
});

client.once("ready", () =>{
    console.log(client.user.username + " is ONLINE"); //message when bot is online
})


client.on('message',
function (messages){
    if(messages.content.toLocaleLowerCase()==='hello') {
        messages.channel.send('hello' + ' '  + messages.author.username); //reply hello word message with senders name
    }
})

client.login(token);