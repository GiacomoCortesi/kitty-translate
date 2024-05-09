/**
 * request body of /api/translate
 */
export interface CreateSoundRequest {
  /**
   * The URL of the pre-trained model to be used for sound generation.
   */
  modelUrl: string

  /**
   * The input text that will be used to generate the sound.
   */
  text: string
}

/**
 * response body for cat fact API
 */
export interface CatFactRequest {
  fact: string
  lentgh: number
}

/**
 * request body for chatgpt API
 */
export interface ChatGptRequest {
  model: string
  messages: ChatGptMessage[]
}

interface ChatGptMessage {
  role: string
  content: string
}

/**
 * response body for chatgpt API
 */
export interface ChatGptResponse {
  id: string
  object: string
  created: number
  model: string
  choices: ChatGptChoice[]
  usage: ChatGptUsage
  system_fingerprint: string
}

export interface ChatGptChoice {
  index: number
  message: ChatGptMessage
  logprobs: any
  finish_reason: string
}

export interface ChatGptUsage {
  prompt_tokens: number
  completion_tokens: number
  total_tokens: number
}
