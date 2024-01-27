// import Configuration from 'openai';
// import OpenAIApi from 'openai';
// const configuration = new Configuration({ apiKey: "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"});
// const openai = new OpenAIApi(configuration);

// export  async function sendMsgToOpenAI(message){
//  const res = await openai.createCompletion({
//     model: 'text-davinci-003',
//     prompt: message,
//     temperature: 0.7,
//     max_tokens: 256,
//     top_p:1,
//     frequency_penalty:0,
//     presence_penalty:0
//  });
// return res.data.choices[0].text;
// }



const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({ 
    organization: 'org-6LbXHPGquLWtw5NyZ9sG9G5r',
    apiKey: "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"
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
