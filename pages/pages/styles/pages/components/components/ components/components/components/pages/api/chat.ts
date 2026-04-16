import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai'

type ResponseData = {
  message: string
  error?: string
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', error: 'Use POST' })
  }

  try {
    const { prompt } = req.body

    if (!prompt) {
      return res.status(400).json({ message: 'Missing prompt', error: 'Prompt is required' })
    }

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are ElderWise, a helpful, patient AI assistant designed specifically for senior citizens. Use simple language, large concepts, and friendly tone. Avoid technical jargon.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    })

    const message = completion.data.choices[0]?.message?.content || 'Sorry, I couldn\'t generate a response.'

    return res.status(200).json({ message })
  } catch (error: any) {
    console.error('OpenAI API error:', error)
    return res.status(500).json({
      message: 'Error processing request',
      error: error.message || 'Unknown error',
    })
  }
}
