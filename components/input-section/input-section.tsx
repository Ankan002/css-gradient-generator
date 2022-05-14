import React from 'react'
import ColorInput from '../color-input';

interface Props{
    inputColorOne: string;
    inputColorTwo: string;
    setInputColorOne: Function;
    setInputColorTwo: Function;
    isDarkRequired: boolean;
}

const InputSection = (props: Props) => {

  const { inputColorOne, inputColorTwo, setInputColorOne, setInputColorTwo, isDarkRequired } = props;

  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-3 mt-4">
        <ColorInput color={inputColorOne} setColor={setInputColorOne} isDarkRequired={isDarkRequired}  />

        <ColorInput color={inputColorTwo} setColor={setInputColorTwo} isDarkRequired={isDarkRequired}  />
    </div>
  )
}

export default InputSection