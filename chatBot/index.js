

const  {OpenAI} = require('openai');
const openai = new OpenAI({apiKey: ""});

async function sendMsgToOpenAI(){
   try {
      const res = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo-16k',
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
   sendMsgToOpenAI()