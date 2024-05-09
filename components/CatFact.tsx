import React, { useState, useEffect } from 'react'

const CatFacts = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await fetch('https://catfact.ninja/fact')
        const data = await response.json()
        if (data.fact) {
          setFact(data.fact)
        } else {
          console.error('Error fetching cat fact')
        }
      } catch (error) {
        console.error('Error fetching cat fact:', error)
      }
    }

    fetchCatFact()
  }, [])

  return (
    fact && (
      <div
        style={{ display: 'flex', margin: '0.25em', flexDirection: 'column' }}
        className={'max-w-[80vh]'}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
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
              d='M13.5 9.2 15 7h5m0 0-3-3m3 3-3 3M4 17h4l1.6-2.3M4 7h4l7 10h5m0 0-3 3m3-3-3-3'
            />
          </svg>
          <h3 className={'mx-2 text-h3'} style={{ fontStyle: 'bold' }}>
            Random cat fact
          </h3>
        </div>
        <p>{fact}</p>
      </div>
    )
  )
}

export default CatFacts
