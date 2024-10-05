import { Textarea, Button } from 'flowbite-react'

interface InputTranslateProps {
  onTranslateButtonClick: any
  onTextInputChange: any
  onToggle: any
  loading: boolean
}

const InputTranslate = ({
  onTranslateButtonClick,
  onTextInputChange,
  onToggle,
  loading,
}: InputTranslateProps) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '30em',
          alignItems: 'center',
        }}
      >
        <label className='mb-2 mt-2 inline-flex cursor-pointer items-center'>
          <span className='ms me-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Base
          </span>
          <input
            type='checkbox'
            value=''
            onClick={onToggle}
            className='peer sr-only'
          />
          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
          <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
            Supreme
          </span>
        </label>
        <Textarea
          style={{ minHeight: '8em', height: '50%', width: '80%' }}
          onChange={onTextInputChange}
        ></Textarea>
        <Button
          disabled={loading}
          onClick={onTranslateButtonClick}
          className={
            'mb-2 me-2 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800'
          }
          style={{
            width: '10em',
            marginTop: '1em',
            color: 'black',
            fontWeight: 'bold',
          }}
        >
          TRANSLATE
        </Button>
      </div>
    </div>
  )
}

export default InputTranslate
