// translate-base use chat GPT API to translate human language to cat language
import { ChatGptRequest, ChatGptResponse } from './types'

const promptPrefix = `Translate text to cat language, only use cat-like words as meow, purrr, miao and similar 
onhomatopeic terms.
Try to figure the topic, feelings, and intentions from the following message and choose cat-terms accordingly.
If topic is about food or love use more purr-like terms.
If topic is about something bad or anger use more grrr-miao terms. 
The answer length should match the length of the text to be translated.
Text to translate:
`

export const translateBase = (message: string): Promise<string> => {
  const url = '/api/catgpt'

  const data: ChatGptRequest = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: `${promptPrefix} ${message}` }],
  }

  console.log('data to send', data)

  return fetch(url, {
    body: JSON.stringify(data),
    method: 'POST',
  })
    .then((response: Response) => {
      return response.json()
    })
    .then((body: ChatGptResponse) => {
      return body.choices[0].message.content
    })
    .catch((error) => {
      console.log(error)
      throw error
    })
}
