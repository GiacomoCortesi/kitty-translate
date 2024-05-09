import React from 'react'
import { TextToSpeech } from './TextToSpeech'

interface OutputTranslateProps {
  text: string
}

const OutputTranslate = ({ text }: OutputTranslateProps) => {
  return (
    <div
      style={{
        margin: '1.25em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h5
        style={{ marginBottom: '0.5em' }}
        className={
          'text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
        }
      >
        Meow-Translation
      </h5>
      <div
        style={{
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <h3
          style={{
            padding: '0.85em',
            width: '80%',
            minHeight: '7em',
            border: 'solid',
            borderRadius: '0.75em',
          }}
          className={'text-h3'}
        >
          {text}
        </h3>
        <TextToSpeech data={text} />
      </div>
    </div>
  )
}

export default OutputTranslate
