import React from "react";
import OrientationButton from "../orientation-button";

interface Props {
  setOrientation: Function;
}

const OrientationSection = (props: Props) => {
  const { setOrientation } = props;
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3">
      <OrientationButton
        type="to top"
        setOrientation={setOrientation}
      />
      <OrientationButton
        type="to right top"
        setOrientation={setOrientation}
      />
      <OrientationButton
        type="to right"
        setOrientation={setOrientation}
      />
      <OrientationButton
        type="to right bottom"
        setOrientation={setOrientation}
      />
      <OrientationButton
        type="to bottom"
        setOrientation={setOrientation}
      />
      <OrientationButton
        type="to bottom left"
        setOrientation={setOrientation}
      />
      <OrientationButton
        type="to left"
        setOrientation={setOrientation}
      />
      <OrientationButton
        type="to left top"
        setOrientation={setOrientation}
      />
    </div>
  );
};

export default OrientationSection;
