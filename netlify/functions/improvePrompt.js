// netlify/functions/improvePrompt.js
import { Configuration, OpenAIApi } from "openai";

export const handler = async (event) => {
  try {
    const { prompt } = JSON.parse(event.body);

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ text: completion.data.choices[0].message.content })
    };
  } catch (err) {
    return {
      statusCode: err.status || 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
