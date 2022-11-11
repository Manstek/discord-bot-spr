const {Client, Intents}=require("discord.js");
const { token } = require('./config.json');

const client=new Client({
    Intents:[
        Intents.FLAGS.GUILDS,//adds server functionality
        Intents.FLAGS.GUILD_MESSAGES, //gets messages from our bot.
    ]
});

client.once("ready", () =>{
    console.log(client.user.username + " is ONLINE"); //message when bot is online
})

const prefix = "/";

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        console.log(client.user.username + " see yor command!");
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
  });

// client.on('message', function (messages){
//     if(messages.content.toLocaleLowerCase()==='hello') {
//         messages.channel.send('hello' + ' '  + messages.author.username); //reply hello word message with senders name
//     }
// })

client.login(token);