import { Configuration, OpenAIApi } from "openai-edge";
import { NextResponse } from "next/server";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {

    const {messages} = await request.json()
    console.log(messages)

    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages
    })

    const stream = OpenAIStream(response)
    
    return new StreamingTextResponse(stream);
    // return NextResponse.json({message: "Hola mi nombre es Tomás"})
    // return NextResponse.json("Hello my name is Tomás")
}