import OpenAI from "openai";

const openai = new OpenAI();

const createImageFromPrompt = async (userPrompt) => {
    const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: userPrompt,
        n: 1,
        size: "1024x1024"
    });

    image_url = response.data.data[0].url;

    return image_url;
}

createImageFromPrompt("An African woman painting.");