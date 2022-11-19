const { SlashCommandBuilder, UserFlags, Message } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Says hello to user!'),
	async execute(interaction) {
		await interaction.reply(`Hello, ${interaction.member.user.username}!`);
	},
};