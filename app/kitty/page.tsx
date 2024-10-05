'use client'
import Image from 'next/image'
import kittyLogo from '@/public/kitty_translate_logo-nobg.png'
import CatFact from '@/components/CatFact'
import CatGpt from '@/components/CatGpt'
import CatLogo from '@/components/CatLogo'
import InputTranslate from '@/components/InputTranslate'
import OutputTranslate from '@/components/OutputTranslate'
import React, { useState } from 'react'
import { translateSupreme } from '@/lib/translate-supreme'
import { translateBase } from '@/lib/translate-base'

export default function Page() {
  const [inputText, setInputText] = useState('')
  const [toggle, setToggle] = useState(false)
  const [translatedText, setTranslatedText] = useState('')
  const [loading, setLoading] = useState(false)

  const onTranslateButtonClick = () => {
    console.log('translate button clicked, translating...')
    if (inputText) {
      console.log('input text', inputText)
      setLoading(true)
      if (!toggle) {
        translateBase(inputText).then((text: string) => {
          setTranslatedText(text)
          setLoading(false)
        })
      } else {
        setTranslatedText(translateSupreme(inputText))
        setLoading(false)
      }
    } else {
      setTranslatedText('')
    }
  }
  const onTextInputChange = (event: any) => {
    console.log('setting text to', event.target.value)
    setInputText(event.target.value)
  }
  return (
    <div>
      <div className={'grid lg:grid-cols-3 gap-4'}>
        <CatLogo />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InputTranslate
            loading={loading}
            onTextInputChange={onTextInputChange}
            onTranslateButtonClick={onTranslateButtonClick}
            onToggle={() => setToggle(!toggle)}
          />
        </div>
        <Image
          alt={'kitty translate'}
          src={kittyLogo}
          style={{ width: '18em', margin: 'auto' }}
        />
      </div>
      <div>
        <OutputTranslate text={translatedText} />
      </div>
      <div className={'flex justify-center'}>
        <CatFact />
      </div>
      <CatGpt />
    </div>
  )
}
