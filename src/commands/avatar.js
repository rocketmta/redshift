import { MessageEmbed } from "discord.js"

module.exports.run = async (Redshift, message, args, prefix) => {
  const user = message.mentions.members.first() || message.author

  if (!user.user) {
    return message.reply("Parece que este usuario não existe.. :slight_frown: ")
  }

  const avatar = new MessageEmbed()
		.setColor('#8257E5')
    .setTimestamp()
		.setTitle(`Avatar de ${user.user.username}:`)
		.setImage(`https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}`)
    message.channel.send({ embeds: [ avatar ] });
};

module.exports.help = {
    name: "avatar",
    usage: "Mostra o avatar de algum usuário",
    type: 'normal'
}