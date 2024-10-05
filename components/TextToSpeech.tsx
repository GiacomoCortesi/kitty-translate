'use client'
import { useState } from 'react'
import { CreateSoundRequest } from '@/lib/types'

interface TextToSpeechProps {
  data: string
}

export function TextToSpeech({ data }: TextToSpeechProps) {
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleGetAudio = async (request: CreateSoundRequest) => {
    setIsLoading(true)

    try {
      // Make a POST request to the server's API endpoint to generate audio
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: request.text,
          modelUrl: request.modelUrl,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch audio data.')
      }

      // Get the audio data as an ArrayBuffer
      const data = await response.arrayBuffer()

      // Convert ArrayBuffer to Blob and create a URL for the audio
      const blob = new Blob([data], { type: 'audio/mpeg' })
      const audioUrl = URL.createObjectURL(blob)
      const audio = new Audio(audioUrl)
      await audio.play()
      setAudioUrl(audioUrl)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }
  function onButtonClick() {
    console.log('clicked')
    const soundRequest: CreateSoundRequest = {
      modelUrl:
        'https://api-inference.huggingface.co/models/facebook/fastspeech2-en-ljspeech',
      text: data,
    }

    // Call the provided handler function with the sound request
    handleGetAudio(soundRequest)
      .then(() => {
        console.log('successfully reproduced audio')
      })
      .catch(() => {
        console.log('error reproducing audio')
      })
  }

  return (
    <div className='ml-8 mr-8'>
      <button
        type='button'
        disabled={isLoading}
        onClick={onButtonClick}
        style={{ marginLeft: '1.25em' }}
        className='focus:ring-amber-600font-medium me-2 inline-flex items-center rounded-lg p-2.5 text-center text-sm text-black focus:outline-none focus:ring-4 dark:hover:bg-amber-300'
      >
        <svg
          className={`h-6 w-6 dark:text-white ${isLoading ? 'text-gray-400' : 'text-gray-800'}`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          viewBox='0 0 24 24'
        >
          <path d='M13 6a2 2 0 0 0-3.3-1.5l-4 3.4H4a2 2 0 0 0-2 2V14c0 1.2.9 2 2 2h1.6l4.1 3.5A2 2 0 0 0 13 18V6Z' />
          <path
            fillRule='evenodd'
            d='M14.8 7.7a1 1 0 0 1 1.4 0 6.1 6.1 0 0 1 0 8.6 1 1 0 0 1-1.3 0 1 1 0 0 1 0-1.5 4 4 0 0 0-.1-5.7 1 1 0 0 1 0-1.4Z'
            clipRule='evenodd'
          />
          <path
            fillRule='evenodd'
            d='M17.7 4.8a1 1 0 0 1 1.4 0 10.2 10.2 0 0 1 0 14.4 1 1 0 0 1-1.4 0 1 1 0 0 1 0-1.4 8.2 8.2 0 0 0 0-11.6 1 1 0 0 1 0-1.4Z'
            clipRule='evenodd'
          />
        </svg>
        {audioUrl && (
          <audio>
            <source id='audioSource' type='audio/flac' src={audioUrl!} />
          </audio>
        )}
      </button>
    </div>
  )
}
