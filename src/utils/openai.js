
export const improvePrompt = async (userPrompt)=> { //Getting user's Prompt (userPrompt)

    const apiKey = import.meta.env.VITE_OPENAI_API_KEY; //Key from .env

    const response = await fetch("https://api.openai.com/v1/chat/completions",{
        method: "POST",
        headers: {
            "Content-Type": "application/json", //Content-type : JSON
            Authorization: `Bearer ${apiKey}` //Authorization VIA key
        },


        body: JSON.stringify({
            model: "gpt-3.5-turbo", //Model
            messages: [
                {
                    role: "system",
                    content: `
                    You are a professional AI prompt engineer.

                    Your task is to take vague, short, or informal user inputs (e.g. "I want a trip to Japan") and turn them into high-quality prompts — meaning improved, detailed, and well-structured instructions that can be directly used as input for another AI.
                    Do not translate. Always respond in the same language the user used.

                    ❗ Do not answer the prompt itself or generate any actual content.
                    ✅ Only rewrite the user's input as a better prompt.

                    Guidelines:
                    - Preserve the original intent exactly.
                    - Do not add assumptions or fictional details.
                    - Expand the input logically with helpful structure and context.
                    - Use markdown formatting if appropriate (headings, bullet points, etc.)
                    - Keep it in the same language.
                    - Respond with only the rewritten prompt, no explanations or extra text.

                    Examples:
                    Input: "I want to build a website"
                    → Output: "Create a professional website including homepage, contact form, responsive layout, and clean design using modern web technologies."

                    Input: "I want a trip to Japan"
                    → Output: "Plan a detailed travel itinerary to Japan including duration, destinations, activities, accommodations, transportation, and budget overview."

                    input: "I want to make cookies"
                    → Output: "Write a clear, step-by-step recipe for making homemade cookies, including ingredients, baking temperature and time, required kitchen tools, and optional flavor variations."

                    input: "I want to open a business"
                    → Output: "Develop a step-by-step plan for launching a new business, including market research, business model definition, legal requirements, financial planning, branding, and marketing strategy."


                    Your goal is to return a refined, ready-to-use prompt — nothing more.
                    `.trim()
                    //System message
                },
                {
                    role: "user",
                    content: userPrompt,
                    //User message
                },
            ],
            temperature : 0.7, //ACC rate
        }),
    });

     if (!response.ok) {
    const errorText = await response.text();
    console.error("OpenAI API error:", response.status, errorText);
    throw new Error(`OpenAI error ${response.status}: ${errorText}`);
    } //Didn't get an OK

    const data= await response.json(); //Waiting for JSON answer


    if (!data.choices || !data.choices[0]) {
    console.error("Unexpected OpenAI response structure:", data);
    throw new Error("No valid choices returned from OpenAI.");
    } //There is no response 

    return data.choices[0].message.content; //Returns answer
};