import React, { useState, useEffect } from "react";
import { validateColor } from "../../helpers/validate-color";
import { checkDarkRequired } from '../../helpers/check-dark-required';

interface Props {
  color: string;
  setColor: Function;
  isDarkRequired: boolean;
}

const ColorInput = (props: Props) => {
  const { color, setColor, isDarkRequired } = props;

  const [isValidColor, setIsValidColor] = useState<boolean>(false);
  const [isTextDark, setIsTextDark] = useState<boolean>(true)

  useEffect(() => {
    const isValidColor = validateColor(color);

    setIsValidColor(isValidColor);

    if(isValidColor){
      checkDarkRequired(color, setIsTextDark);
    }
    else{
      setIsTextDark(isDarkRequired);
    }
  }, [color]);

  return (
    <input
      className={`flex h-10 w-44 items-center rounded-md border-2 px-3 py-2 ${
        isDarkRequired ? "border-black" : "border-gray-50"
      } outline-none ${isTextDark ? "text-black" : "text-gray-50"} font-manrope`}
      style={{ backgroundColor: isValidColor ? color : "transparent" }}
      value={color}
      onChange={(e) => setColor(e.target.value)}

    />
  );
};

export default ColorInput;
