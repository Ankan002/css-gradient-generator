import React from 'react'
import {generateResult} from "../../helpers/generate-result";

interface Props{
    isDarkRequired: boolean;
    inputColorOne: string;
    inputColorTwo: string;
    setColorOne: Function;
    setColorTwo: Function;
    orientation: string;
    setGeneratedColorOne: Function;
    setGeneratedColorTwo: Function;
    setGeneratedColorThree: Function;
}

const GenerateGradient = (props: Props) => {

  const { isDarkRequired, inputColorOne, inputColorTwo, setColorOne, setColorTwo, orientation, setGeneratedColorOne, setGeneratedColorTwo, setGeneratedColorThree } = props;

  const onGenerateGradientClick = () => {
      generateResult(inputColorOne, inputColorTwo, orientation, setColorOne, setColorTwo, setGeneratedColorOne, setGeneratedColorTwo, setGeneratedColorThree);
  }

  return (
    <button className={`lg:w-1/3 md:w-1/2 w-full h-10 justify-center items-center font-manrope font-semibold lg:text-xl md:text-lg text-base border-2 ${isDarkRequired ? "border-black" : "border-gray-50"} mt-4 rounded-md hover:text-gray-300 hover:border-gray-300 transition-all ease-in-out`} onClick={onGenerateGradientClick}>
        Generate Gradient
    </button>
  )
}

export default GenerateGradient