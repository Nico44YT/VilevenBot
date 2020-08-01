//Consts
const {Client, Discord, Collection, MessageEmbed} = require('discord.js');
const bot = new Client(); 
const PREFIX = '?';
const fs = require('fs');
const ytdl = require("ytdl-core");

//Variables
var version ='5.5.769.54.17.21.489';


//command handler
bot.commands = new Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

bot.commands.set(command.name, command);
}


//Bot Online
bot.on('ready', () =>{
    console.log(`Bot Online with version : `+ version);
    bot.user.setActivity('auf Vileven')
})

//Command

bot.on('message', message=>{
    let prefix = PREFIX;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


            //user commands
        if(cmd === `${prefix}online`){
            bot.commands.get('online').execute(message, args)
        }

        
        if(cmd === `${prefix}help`){
            bot.commands.get('help').execute(message, args)
        }
        if(cmd === `${prefix}hilfe`){
            bot.commands.get('help').execute(message, args)
        }  
    
        if(cmd === `${prefix}clear`){
            message.channel.bulkDelete(1);
            if(!message.member.roles.cache.find(r => r.name === "=====[Team]=====")) return message.reply('Access Denied')
            .then(message => message.delete({timeout: 2000}));{
            if(!args[1]) return message.reply('Error please define a number of clear')
            .then(message => message.delete({timeout: 2000}))
            message.channel.bulkDelete(args[1]);
          
             }
        }
            
            
                
       









 



        

     
        
            
          //music
         
            if(cmd === `${prefix}play`){
                
                    message.channel.bulkDelete(1);
                    function play(connection, message){
                        var server = servers[message.guild.id];
    
                        server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
    
                        server.queue.shift();
    
                        server.dispatcher.on("finish", function(){
                            if(server.queue[0]){
                                play(connection, message);
                            }else{
                                connection.disconnect();
                            }
                        })
                    }
    
                
    
                if(!message.member.roles.cache.find(r => r.name === "=====[Team]=====")) return message.reply('Access Denied').then(message => message.delete({timeout: 2000}));{
                        if(!args[1]){
                            message.reply("Error please define a youtube link").then(message => message.delete({timeout: 2000}));
                       return;
                            }
                            if(!message.member.voice.channel){
                            message.reply("Error please in a voice channel").then(message => message.delete({timeout: 2000}));
                            return;
                            }
                        if(!servers[message.guild.id]) servers[message.guild.id] = {
                            queue: []
                        }
                    
                        
                        var server = servers[message.guild.id];
    
                        server.queue.push(args[1]);
    
                        if(!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
                            play(connection, message);
                        })
    
    
                    
    
                }
            
            }      
        }
  
)

    

bot.login(process.env.TOKEN);