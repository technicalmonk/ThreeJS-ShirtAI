import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI to generate... For example: 'A simple vector based logo'"
        rows={7}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."

            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="filled"
              title="Make Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title="Full Shirt"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker