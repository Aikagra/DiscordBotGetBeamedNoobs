module.exports = {
  name: 'kick',
  description: 'this command kicks a member!',
  execute(message, args) {
    const member = message.mentions.users.first();
    if (member) {
      const memberTarger = message.guild.members.cache.get(member.id);
      memberTarger.kick();
      message.channel.send("User has been kicked lol");
    } else {
      message.channel.send('You could not kick that member, noob');
    }
  }
}