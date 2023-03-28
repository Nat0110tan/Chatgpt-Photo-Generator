import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  organization: `Bearer ${process.env.OPEN_AI_ORGANIZATION}`,
  apiKey: `Bearer ${process.env.OPEN_AI_KEY}`,
});

const openai = new OpenAIApi(config);

export default openai;
