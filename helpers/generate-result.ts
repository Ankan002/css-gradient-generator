import chroma from "chroma-js";
import {toast} from "react-hot-toast";

export const generateResult = (
    inputColorOne: string,
    inputColorTwo: string,
    orientation: string,
    setColorOne: Function,
    setColorTwo: Function,
    setGeneratedColorOne: Function,
    setGeneratedColorTwo: Function,
    setGeneratedColorThree: Function
): void => {
    let isColorValid = chroma.valid(inputColorOne);

    if(!isColorValid) {
        toast.error("First Color is invalid");
        return;
    }

    isColorValid = chroma.valid(inputColorTwo);

    if(!isColorValid) {
        toast.error("Second Color is invalid");
        return;
    }

    setColorOne(inputColorOne);
    setColorTwo(inputColorTwo);

    const colorsGenerated = chroma.scale([inputColorOne, inputColorTwo]).mode("lch").colors(5);

    setGeneratedColorOne(colorsGenerated[1]);
    setGeneratedColorTwo(colorsGenerated[2]);
    setGeneratedColorThree(colorsGenerated[3]);
}