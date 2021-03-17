const client = new Discord.Client();
const Discord = require("discord.js");
const config = require("./config.json");
const prefix = require("./config.json");

client.on("ready", () => {
    console.log(`${client.user.username} está en linea!`);
    
//Puedes cambiar esto ------ ↓  por cualquier actividad que quieres para el bot :) de paso donde dice "PLAYING" puedes cambiarlo por calquier tipo de actividad.
    client.user.setActivity(" ",{type: "PLAYING"});
})

client.on("message", (message) => {
var prefix = config.prefix;
if(!message.content.startsWith(config.prefix)) return;
if(message.author.bot) return;

//Ejemplo de un par de comandos simples con prefix :D

if(message.content.startsWith(prefix +"Hola!")){
    message.channel.send("Hola!", message.author);

  }else

    //este comando al colocar el prefix más el nombre así por ejemplo = !ping te dara el ping del bot!

  if(message.content.startsWith(prefix + "ping")) {
    message.channel.send(`Pong! ${client.ws.ping}ms`);
 
  }
 }
)
client.login(config.token);