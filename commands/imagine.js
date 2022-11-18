const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
module.exports = {
    name: "imagine",
    description : "creates an AI generated image from the specified prompt",
    async execute(message, args, Discord) {
        if(!args.length) return message.channel.send("enter the second argument")
        const prompt = args.join(' ')
        const response = await openai.createImage({
          prompt: prompt,
          n: 1,
          size: "1024x1024"
        })
        imageUrl = response.data.data[0].url
        const newEmbedMsg = new Discord.MessageEmbed()
        .setColor("#11f7e5")
        .setTitle("AI image")
        .setDescription("Here is your AI generated Image")
        .setImage(imageUrl)
        .setFooter("Special Thanks to OpenAI!")

        message.channel.send(newEmbedMsg)
    }
}