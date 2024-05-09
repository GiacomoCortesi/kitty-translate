import { useState } from 'react'
import TypingAnimation from './TypingAnimation'
import { ChatGptRequest, ChatGptResponse } from '@/lib/types'

interface Message {
  type: string
  message: string
}

const promptPrefix =
  'Answer questions pretending to be a cat and talk cat language in a funny and sophisticated manner. To do so, leverage cats main characterstics. Cat behaviour is a bit selfish and arrogant.'

export default function CatGpt() {
  const [inputValue, setInputValue] = useState('')
  const [chatLog, setChatLog] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showChat, setShowChat] = useState(false)

  const handleSubmit = (event: any) => {
    event.preventDefault()

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: 'user', message: inputValue },
    ])

    sendMessage(inputValue)

    setInputValue('')
  }

  const onChatOpenClick = () => {
    console.log('clicked show chat button')
    setShowChat(true)
  }

  const onChatCloseClick = () => {
    console.log('clicked close chat button')
    setShowChat(false)
  }

  const sendMessage = (message: any) => {
    const url = '/api/catgpt'

    const data: ChatGptRequest = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `${promptPrefix} ${message}` }],
    }

    console.log('prompt prefix', promptPrefix)

    setIsLoading(true)
    console.log('data to send', data)

    fetch(url, {
      body: JSON.stringify(data),
      method: 'POST',
    })
      .then((response: Response) => {
        response.json().then((body: ChatGptResponse) => {
          setChatLog((prevChatLog) => [
            ...prevChatLog,
            { type: 'bot', message: body.choices[0].message.content },
          ])
          setIsLoading(false)
        })
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error)
      })
  }

  return (
    <div className='fixed bottom-3 right-2'>
      {showChat ? (
        <div className='flex h-screen max-h-[500px] flex-col rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500'>
          <div className={'flex flex-row'}>
            <h1 className='bg-clip-text px-3 py-3 text-center text-4xl font-bold'>
              CatGPT
            </h1>
            <div className={'container flex justify-end'}>
              <button style={{ margin: '1em' }} onClick={onChatCloseClick}>
                <svg
                  className='h-6 w-6 text-gray-800 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18 18 6m0 12L6 6'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex-grow overflow-y-scroll p-6'>
            <div className='flex flex-col space-y-4'>
              {chatLog.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`${
                      message.type === 'user' ? 'bg-orange-400' : 'bg-gray-800'
                    } max-w-sm rounded-lg p-4 text-white`}
                  >
                    {message.message}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div key={chatLog.length} className='flex justify-start'>
                  <div className='max-w-sm rounded-lg bg-gray-800 p-4 text-white'>
                    <TypingAnimation />
                  </div>
                </div>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className='flex-none p-6'>
            <div className='flex rounded-lg border border-amber-600 bg-pink-300'>
              <input
                type='text'
                className='flex-grow border-0 bg-transparent px-4 py-2 focus:outline-none'
                placeholder='Type your message...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button
                type='submit'
                className='rounded-lg px-4 py-2 font-semibold transition-colors duration-300 hover:bg-orange-400 focus:outline-none'
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          type='button'
          onClick={onChatOpenClick}
          style={{ marginLeft: '1.25em' }}
        >
          <svg
            className='h-12 w-12 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fillRule='evenodd'
              d='M3.6 4.5c.3-.3.8-.5 1.3-.5H19a1.9 1.9 0 0 1 2 1.9V15a1.9 1.9 0 0 1-1.9 1.9h-3.6l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.9A1.9 1.9 0 0 1 3 15.1V6c0-.5.2-1 .6-1.4Zm4 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.6Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      )}
    </div>
  )
}
