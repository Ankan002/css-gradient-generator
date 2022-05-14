import React from "react";
import { BsArrowUp, BsArrowUpRight, BsArrowRight, BsArrowDownRight, BsArrowDown, BsArrowDownLeft, BsArrowLeft, BsArrowUpLeft } from "react-icons/bs";
import type { OrientationType } from "../../types/orientation-type";

interface Props {
  type: OrientationType;
  setOrientation: Function;
}

const OrientationButton = (props: Props) => {
  const { type, setOrientation } = props;

  const onSetOrientationClick = () => {
    setOrientation(type);
  }

  return (
    <button className={`font-manrope py-1 px-2 rounded-md ease-in-out transition-all`} onClick={onSetOrientationClick}>
      {type === "to top" && <BsArrowUp className="text-xl hover:text-2xl" />}

      {type === "to right top" && (
        <BsArrowUpRight className="text-xl hover:text-2xl" />
      )}

      {type === "to right" && (
        <BsArrowRight className="text-xl hover:text-2xl" />
      )}

      {type === "to right bottom" && (
        <BsArrowDownRight className="text-xl hover:text-2xl" />
      )}

      {type === "to bottom" && (
        <BsArrowDown className="text-xl hover:text-2xl" />
      )}

      {type === "to bottom left" && (
        <BsArrowDownLeft className="text-xl hover:text-2xl" />
      )}

      {type === "to left" && (
        <BsArrowLeft className="text-xl hover:text-2xl" />
      )}

      {type === "to left top" && (
        <BsArrowUpLeft className="text-xl hover:text-2xl" />
      )}

    </button>
  );
};

export default OrientationButton;
