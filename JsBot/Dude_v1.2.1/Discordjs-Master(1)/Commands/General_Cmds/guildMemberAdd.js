// ██████ Initialization ███████████████████████████████████████████████████████

/*class guildMemberAdd {

    constructor(client) {

        this.enable = true;
        this.client = client;
    }

    async run(member) {

        const client = this.client;
*/
//module.exports = {
//ping : (message)=>{
//    message.channel.send('Pong.')},
module.exports = guildMemberAdd=
{
    welcome:(Event)=> 
    {if  (member.user.bot)
            return;

        (client.config.welcomeMsg === true); {

            try {
                const toChannel =
                    client.config.welcomeMsgChannel
                    || member.guild.systemChannelID
                    || member.guild.channels.cache.find((channel) => channel.permissionsFor(member.guild.me).has("SEND_MESSAGES"));

                client.channels.cache.get(toChannel).send("test");

            } catch (error) {
                console.log(error);
            }
        }
    }
}

