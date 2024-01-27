


const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({ 
    organization: 'org-6LbXHPGquLWtw5NyZ9sG9G5r',
    apiKey: ""
});

const openai = new OpenAIApi(configuration);

async function sendMsgToOpenAI() {
    try {
        const res = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: 'hello',
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });

        console.log(res.data.choices[0].text);
    } catch (error) {
        console.error('Error:', error);
    }
}

sendMsgToOpenAI();
