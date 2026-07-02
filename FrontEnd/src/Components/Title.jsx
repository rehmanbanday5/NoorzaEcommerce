import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-[#1a1a1a]">
        {text1} <span className="text-[#c89116] font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#1a1a1a]"></p>
    </div>
  );
}

export default Title